import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/errors.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hashedPassword });

    // saving newUser to MongoDB
    await newUser.save();
    res.status(201).send("User has been created");
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) return next(createError(401, "Wrong Credentials!"));

    // if everything is correct, then we'll send access token using jwt
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT
    );

    // extracting password before sending the user object
    const { password, ...otherData } = user._doc;

    // using cookies to send access token
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(otherData);
  } catch (err) {
    next(err);
  }
};

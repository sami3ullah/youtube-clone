import {createError} from "../utils/errors.js";
import User from "../models/User.js";

export const update = async (req, res, next) => {
  if (!(req.params.id === req.user.id)) return next(createError(403, "You can only update your account information!"))
      // if the IDs match
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, {new: true})
      res.status(200).json(updatedUser)
    } catch (err) {
      next(err)
    }

};

export const deleteUser = (req, res, next) => {
  res.json("Successful");
};
export const getUser = (req, res, next) => {
  res.json("Successful");
};
export const subscribe = (req, res, next) => {
  res.json("Successful");
};
export const unSubscribe = (req, res, next) => {
  res.json("Successful");
};
export const likeVideo = (req, res, next) => {
  res.json("Successful");
};
export const disLikeVideo = (req, res, next) => {
  res.json("Successful");
};

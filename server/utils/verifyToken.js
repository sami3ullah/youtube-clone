import jwt from "jsonwebtoken";
import { createError } from "./errors.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "You are not authenticated"));

//  if token is not valid
  jwt.verify(token, process.env.JWT, (err,user) => {
    if(err) return next(createError(403, "Token is not valid"));

  //  if everything is okay
    req.user = user;
    next();
  })

};

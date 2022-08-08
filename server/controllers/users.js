import {createError} from "../utils/errors.js";
import User from "../models/User.js";
import Video from "../models/Video.js";

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

export const deleteUser = async (req, res, next) => {
  if (!(req.params.id === req.user.id)) return next(createError(403, "You can only delete your account information!"))
  // if the IDs match
  try {
    const user = await User.findById(req.params.id);
    if(!user) return next(createError(404,"User not found!"))

    //if user found
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("User has been deleted");
  } catch (err) {
    next(err)
  }
};

export const getUser = async (req, res, next) => {
  try {
    const getUser = await User.findById(req.params.id)
    res.status(200).json(getUser)
  } catch (err) {
    next(err)
  }
};

export const subscribe = async (req, res, next) => {
  try {
    //req.user.id is ours and req.params.id is other channel id to which we are subscribing
    await User.findByIdAndUpdate(req.user.id, {
      $push: {subscribedChannels:req.params.id}
    });
    //now increment the subscribers count of the channel
    await User.findByIdAndUpdate(req.params.id, {
      $inc:{subscribers: 1},
    });
    res.status(200).json("You are now subscribed to this channel");
  } catch (err) {
    next(err)
  }
};

export const unSubscribe = async (req, res, next) => {
  try {
    //req.user.id is ours and req.params.id is other channel id to which we are subscribing
    await User.findByIdAndUpdate(req.user.id, {
      $pull: {subscribedChannels:req.params.id}
    });
    //now increment the subscribers count of the channel
    await User.findByIdAndUpdate(req.params.id, {
      $inc:{subscribers: -1},
    });
    res.status(200).json("You are unsubscribed to this channel");
  } catch (err) {
    next(err)
  }
};

export const likeVideo = async (req, res, next) => {
  const userId = req.user.id;
  const videoId = req.params.videoId;
  try{
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: {likes: userId},
      $pull: {disLikes: userId}
    })
    res.status(200).json("You Like this video");
  }catch(err){
    next(err);
  }
};

export const disLikeVideo = async (req, res, next) => {
  const userId = req.user.id;
  const videoId = req.params.videoId;
  try{
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: {disLikes: userId},
      $pull: {likes: userId}
    })
    res.status(200).json("Unliked a video");
  }catch(err){
    next(err);
  }
};

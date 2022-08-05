import express from "express";
import {
  deleteUser,
  disLikeVideo,
  getUser,
  likeVideo,
  subscribe,
  unSubscribe,
  update,
} from "../controllers/users.js";
import {verifyToken} from "../verifyToken.js";

const router = express.Router();

// update a user
router.put("/:id", verifyToken ,update);

// delete a user
router.delete("/:id", deleteUser);

// get a user
router.get("/find/:id", getUser);

// subscribe a user
router.put("/subscribe/:id", subscribe);

// unsubscribe a user
router.put("/unsubscribe/:id", unSubscribe);

// like a video
router.put("/like/:id", likeVideo);

// dislike a video
router.put("/dislike/:id", disLikeVideo);

export default router;

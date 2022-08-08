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
import {verifyToken} from "../utils/verifyToken.js";

const router = express.Router();

// update a user
router.put("/:id", verifyToken ,update);

// delete a user
router.delete("/:id", verifyToken, deleteUser);

// get a user
router.get("/find/:id", getUser);

// subscribe a user
router.put("/subscribe/:id", verifyToken, subscribe);

// unsubscribe a user
router.put("/unsubscribe/:id", verifyToken, unSubscribe);

// like a video
router.put("/like/:videoId", verifyToken, likeVideo);

// dislike a video
router.put("/dislike/:videoId", verifyToken, disLikeVideo);

export default router;

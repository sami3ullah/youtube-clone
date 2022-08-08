import express from "express";
import {
    addVideo,
    deleteVideo,
    getVideo,
    updateVideo,
    increaseVideoView,
    getTrendingVideos, getRandomVideos, getSubscribedChannelVideos, search, getVideoByTag
} from "../controllers/videos.js";
import {verifyToken} from "../utils/verifyToken.js";

const router = express.Router();

//create a video
router.post("/", verifyToken, addVideo)
router.delete("/:id", verifyToken, deleteVideo)
router.put("/:id", verifyToken, updateVideo)
router.get("/find/:id", getVideo)
router.put("/view/:id", increaseVideoView)
router.get("/trend", getTrendingVideos)
router.get("/random", getRandomVideos)
router.get("/sub", verifyToken, getSubscribedChannelVideos)
router.get("/tags", getVideoByTag)
router.get("/search", search)

export default router;

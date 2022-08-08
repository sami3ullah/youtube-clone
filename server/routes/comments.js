import express from "express";
import {createComment, deleteComment, getComments} from "../controllers/comments.js";
import {verifyToken} from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createComment)
router.delete("/:id", verifyToken, deleteComment)
router.get("/:videoId", verifyToken, getComments)

export default router;

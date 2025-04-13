import express from "express";
import { addComment, getComments, deleteComment, updateComment} from "../controllers/commentController.js";
import verifyToken from "../middlewares/vertifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addComment);               // Add comment
router.get("/:videoId", getComments);                    // Get comments for a video
router.delete("/:id", verifyToken, deleteComment);       // Delete a comment
router.put("/:id", verifyToken, updateComment);          // Update a comment

export default router;

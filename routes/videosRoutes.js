import express from "express";
import { addVideo, getVideo, deleteVideo, getAllVideos, toggleLike, toggleDislike, toggleSubscribe, updateVideo } from "../controllers/videoController.js";
import verifyToken from "../middlewares/vertifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addVideo);
router.get("/",getAllVideos)
router.get("/:id", getVideo);
router.put("/:id",verifyToken, updateVideo);
router.delete("/:id", verifyToken, deleteVideo);
router.put("/like/:id", verifyToken, toggleLike);
router.put("/dislike/:id", verifyToken, toggleDislike);
router.put("/subscribe/:id", verifyToken, toggleSubscribe);


export default router;

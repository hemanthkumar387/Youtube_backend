import express from "express";
import { createOrUpdateChannel, getChannel} from "../controllers/channelController.js";
import verifyToken from "../middlewares/vertifyToken.js";

const router = express.Router();

// POST or PUT for creating/updating channel
router.post("/", verifyToken, createOrUpdateChannel);

// Get a specific channel
router.get("/:userId", getChannel);

export default router;

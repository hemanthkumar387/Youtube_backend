import express from "express";
import { updateUser, deleteUser, getUser} from "../controllers/userController.js";
import verifyToken from "../middlewares/vertifyToken.js";

const router = express.Router();

// PUT /api/users/:id
router.put("/:id", verifyToken, updateUser);

// DELETE /api/users/:id
router.delete("/:id", verifyToken, deleteUser);

// GET /api/users/:id
router.get("/:id", getUser);

export default router;

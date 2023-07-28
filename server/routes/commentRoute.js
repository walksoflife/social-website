import express from "express";
const router = express.Router();
import {
  createComment,
  removeComment,
} from "../controllers/commentController.js";

router.post("/", createComment);
router.delete("/:commentId", removeComment);

export default router;

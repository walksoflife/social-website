import express from "express";
const router = express.Router();
import {
  createLike,
  removePost,
  createPost,
  getPostById,
  getAllPosts,
  createBookmark,
} from "../controllers/postController.js";
import {fileUpload} from "../middlewares/fileUpload.js";

router.get("/", getAllPosts);
router.get("/:postId", getPostById);
router.post("/", fileUpload.array("image"), createPost);
router.delete("/:postId", removePost);
router.post("/like", createLike);
router.post("/bookmark", createBookmark);

export default router;

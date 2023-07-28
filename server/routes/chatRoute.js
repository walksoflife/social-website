import express from "express";
import {
  createChat,
  getAllChat,
  deleteChat,
  addToGroup,
  changeGroupName,
  removeOutGroup,
} from "../controllers/chatController.js";
const router = express.Router();

router.get("/all", getAllChat);
router.get("/:members", createChat);
router.delete("/:chatId", deleteChat);
router.patch("/name/:chatId", changeGroupName);
router.patch("/:chatId", addToGroup);
router.put("/:chatId", removeOutGroup);

export default router;

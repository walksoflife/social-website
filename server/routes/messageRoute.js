import express from "express";
import {
  getMessagesOfChat,
  sendMessage,
  seenMessage,
} from "../controllers/messageController.js";
const router = express.Router();

router.get("/:chatId", getMessagesOfChat);
router.post("/", sendMessage);
router.put("/", seenMessage);

export default router;

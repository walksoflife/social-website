import express from "express";
import {
  getAllNotifications,
  unReadNotification,
} from "../controllers/notificationController.js";

const router = express.Router();

router.get("/read", getAllNotifications);
router.get("/unread", unReadNotification);

export default router;

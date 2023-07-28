import express from "express";
const router = express.Router();

import authRoute from "./authRoute.js";
import userRoute from "./userRoute.js";
import postRoute from "./postRoute.js";
import commentRoute from "./commentRoute.js";
import chatRoute from "./chatRoute.js";
import messageRoute from "./messageRoute.js";
import notificationRoute from "./notificationRoute.js";
import { verifyAccessToken } from "../middlewares/verifyToken.js";

export const routes = () => {
  router.use("/api/auth", authRoute);
  router.use(verifyAccessToken);
  router.use("/api/posts", postRoute);
  router.use("/api/comments", commentRoute);
  router.use("/api/users", userRoute);
  router.use("/api/chats", chatRoute);
  router.use("/api/messages", messageRoute);
  router.use("/api/notifications", notificationRoute);

  return router;
};

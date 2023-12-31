import Notification from "../models/notificationModel.js";
import createError from "http-errors";

// ---------------- GET ALL NOTIFICATIONS READ ----------------
export const getAllNotifications = async (req, res, next) => {
  try {
    const userId = req.user.userId;

    await Notification.updateMany({ receiver: userId }, { read: true });

    const notifications = await Notification.find({ receiver: userId })
      .sort({
        createdAt: "desc",
      })
      .populate("sender", ["username", "avatar"])
      .populate("receiver", ["username", "avatar"])
      .populate("post", ["image"])
      .populate("comment", ["username", "avatar", "content"]);

    return res
      .status(200)
      .json({ message: "Get all notifications", notifications });
  } catch (error) {
    return next(error);
  }
};

// ---------------- SET NOTIFICATION READ ----------------
export const unReadNotification = async (req, res, next) => {
  try {
    const userId = req.user.userId;

    const notifications = await Notification.find({
      receiver: userId,
      read: false,
    })
      .sort({
        createdAt: "desc",
      })
      .populate("sender", ["username", "avatar"])
      .populate("receiver", ["username", "avatar"])
      .populate("post", ["image"])
      .populate("comment", ["username", "avatar", "content"]);

    return res
      .status(200)
      .json({ message: "Un read notifications", notifications });
  } catch (error) {
    return next(error);
  }
};

// ---------------- CREATE NOTIFICATION ----------------
export const createLikeNotification = async (sender, receiver, post) => {
  try {
    const notification = await Notification.create({
      sender,
      receiver,
      type: "like",
      post,
    });
    await notification.save();
  } catch (error) {
    throw createError.InternalServerError();
  }
};

export const removeLikeNotification = async (sender, receiver, post) => {
  try {
    await Notification.findOneAndDelete({
      sender,
      receiver,
      type: "like",
      post,
    });
  } catch (error) {
    throw createError.InternalServerError();
  }
};

export const createCommentNotification = async (sender, receiver, post, comment) => {
  try {
    const notification = await Notification.create({
      sender,
      receiver,
      type: "comment",
      post,
      comment,
    });
    await notification.save();
  } catch (error) {
    throw createError.InternalServerError();
  }
};

export const removeCommentNotification = async (sender, receiver, post, comment) => {
  try {
    await Notification.findOneAndDelete({
      sender,
      receiver,
      type: "comment",
      post,
      comment,
    });
  } catch (error) {
    throw createError.InternalServerError();
  }
};

export const createFollowNotification = async (sender, receiver) => {
  try {
    const notification = await Notification.create({
      sender,
      receiver,
      type: "follow",
    });
    await notification.save();
  } catch (error) {
    throw createError.InternalServerError();
  }
};

export const removeFollowNotification = async (sender, receiver) => {
  try {
    await Notification.findOneAndDelete({
      sender,
      receiver,
      type: "follow",
    });
  } catch (error) {
    throw createError.InternalServerError();
  }
};

// module.exports = {
//   getAllNotifications,
//   unReadNotification,
//   createLikeNotification,
//   removeLikeNotification,
//   createCommentNotification,
//   removeCommentNotification,
//   createFollowNotification,
//   removeFollowNotification,
// };

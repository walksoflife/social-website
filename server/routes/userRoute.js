import express from "express";
const router = express.Router();
import {
  getUserByUsername,
  updateUser,
  followUser,
  searchUser,
  getListFriend,
  suggestionUser,
  getUsersFristLogin,
  flUser,
  unFlUser,
} from "../controllers/userController.js";
import {fileUpload} from "../middlewares/fileUpload.js";

router.get("/first-login", getUsersFristLogin);
router.get("/suggestions", suggestionUser);
router.get("/search", searchUser);
router.get("/friends", getListFriend);
router.get("/:username", getUserByUsername);
router.patch("/", fileUpload.single("avatar"), updateUser);
router.post("/follow", followUser);
router.post("/follow/fl", flUser);
router.post("/follow/unfl", unFlUser);

export default router;

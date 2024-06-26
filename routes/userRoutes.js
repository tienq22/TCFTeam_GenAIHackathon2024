import express from "express";

import {
  loginUser,
  registerUser,
  logoutUser,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);

export default router;

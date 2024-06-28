import express from "express";

import { createExam } from "../controllers/examController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createExam);

export default router;

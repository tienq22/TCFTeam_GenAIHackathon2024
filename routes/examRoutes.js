import express from "express";

import { createExam, getExamById } from "../controllers/examController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createExam);
router.route("/:id").get(protect, getExamById);

export default router;

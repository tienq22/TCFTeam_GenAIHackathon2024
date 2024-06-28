import asyncHandler from "../middleware/asyncHandler.js";
import { Exam } from "../models/examModel.js";
import generateExam from "../utils/generateExam.js";

/**
 * @desc Create a new exam
 * @route POST /api/exams
 * @access Private
 */
const createExam = asyncHandler(async (req, res) => {
  const result = await generateExam();
  if (result.error) {
    res.status(502);
    throw new Error("Bad Gateway: Third-party API error", result.error);
  }
  const examText = result.response.candidates[0].content.parts[0].text;
  const examData = JSON.parse(examText);

  const exam = await Exam.create(examData);
  if (exam) {
    res.status(201).json({
      _id: exam._id,
      parts: exam.parts,
    });
  } else {
    res.status(500);
    throw new Error("Internal Server Error: Could not create exam");
  }
});

export { createExam };

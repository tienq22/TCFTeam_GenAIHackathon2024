import asyncHandler from "../middleware/asyncHandler.js";
import generateExam from "../utils/generateExam.js";
import Exam from "../models/examModel.js";

const createExam = asyncHandler(async (req, res) => {
  const result = await generateExam();
  if (result.error) {
    res.status(502);
    throw new Error(`Bad Gateway: Third-party API error: ${result.error}`);
  }

  const examData = {
    parts: {},
  };

  result.response.forEach((partResponse, index) => {
    const partNumber = `part${index + 1}`;
    const partContent = JSON.parse(
      partResponse.candidates[0].content.parts[0].text
    );
    examData.parts[partNumber] = partContent;
  });

  const exam = await Exam.create(examData);
  if (exam) {
    res.status(201).json({
      examId: exam._id,
    });
  } else {
    res.status(500);
    throw new Error("Internal Server Error: Could not create exam");
  }
});

/**
 * @desc Get exam by id
 * @route GET /api/exams/:id
 * @access Private
 */
const getExamById = asyncHandler(async (req, res) => {
  const exam = await Exam.findById(req.params.id);
  if (exam) {
    return res.json(exam);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { createExam, getExamById };

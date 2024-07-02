import asyncHandler from "../middleware/asyncHandler.js";
import TakeExam from "../models/takeExamModel.js";
import Exam from "../models/examModel.js";
import User from "../models/userModel.js";

/**
 * @desc Submit exam
 * @route POST /api/taken
 * @access Private
 */
const submitExam = asyncHandler(async (req, res) => {
  const { examId, submitDate, userAnswers } = req.body;

  if (!examId || !submitDate || !userAnswers) {
    res.status(400);
    throw new Error(
      "Missing required fields: examId, submitDate, or userAnswers"
    );
  }

  const exam = await Exam.findById(examId);
  if (!exam) {
    res.status(404);
    throw new Error("Exam not found");
  }

  const { parts } = exam;
  if (!parts) {
    res.status(400);
    throw new Error("Exam has no parts defined");
  }

  const correctAnswers = {};
  const temp = [];

  for (let i = 1; i <= 12; i++) {
    const part = parts[`part${i}`];
    if (part && Array.isArray(part.questions)) {
      temp.push(...part.questions.map((q) => q.correctOption));
    }
  }

  temp.forEach((opt, index) => {
    correctAnswers[index] = opt;
  });

  let score = 0;
  let wrongAnswersCount = 0;
  let rightAnswersCount = 0;

  Object.keys(correctAnswers).forEach((key) => {
    if (
      userAnswers[key] === null ||
      userAnswers[key] === undefined ||
      userAnswers[key] !== correctAnswers[key]
    ) {
      wrongAnswersCount++;
    } else {
      rightAnswersCount++;
    }
  });

  score = 0.2 * rightAnswersCount;

  const taken = await TakeExam.create({
    userId: req.user._id,
    examId,
    submitDate,
    userAnswers,
    score,
    rightAnswersCount,
    wrongAnswersCount,
  });

  if (taken) {
    res.status(201).json({
      takenId: taken._id,
    });
  } else {
    res.status(400);
    throw new Error("Invalid data. Please try again");
  }
});

/**
 * @desc Get exam score
 * @route GET /api/taken/:id
 * @access Private
 */
const getExamScore = asyncHandler(async (req, res) => {
  const taken = await TakeExam.findById(req.params.id);

  const { _id: takenId, rightAnswersCount, wrongAnswersCount, score } = taken;

  if (taken) {
    res.json({
      takenId,
      rightAnswersCount,
      wrongAnswersCount,
      score,
    });
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

/**
 * @desc Get exam detailed answers
 * @route GET /api/taken/:id/details
 * @access Private
 */
const getExamDetailedAnswers = asyncHandler(async (req, res) => {
  const taken = await TakeExam.findById(req.params.id);

  if (taken) {
    const exam = await Exam.findById(taken.examId);

    if (!exam) {
      res.status(404);
      throw new Error("Exam not found");
    }

    res.json({
      userAnswers: taken.userAnswers,
      exam,
    });
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { submitExam, getExamScore, getExamDetailedAnswers };

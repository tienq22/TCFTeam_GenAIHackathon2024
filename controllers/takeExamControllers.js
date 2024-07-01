import asyncHandler from "../middleware/asyncHandler";
import TakeExam from "../models/takeExamModel";
import Exam from "../models/examModel";
import User from "../models/userModel";

/**
 * @desc Submit exam
 * @route POST /api/taken
 * @access Private
 */
const submitExam = asyncHandler(async (req, res) => {
  const { userId, examId, submitDate, userAnswers } = req.body;

  const user = await User.findById(userId);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const exam = await Exam.findById(examId);
  if (!exam) {
    res.status(404);
    throw new Error("Exam not found");
  }

  const { parts } = exam;
  const correctOptions = [];

  for (let i = 1; i <= 12; i++) {
    correctOptions.push(
      ...parts[`part${i}`].questions.map((q) => q.correctOtpion)
    );
  }

  let score = 10;
  let wrongAnswersCount = 0;

  correctOptions.forEach((opt, index) => {
    if (opt !== userAnswers[index]) {
      wrongAnswersCount++;
    }
  });

  score -= 0.2 * wrongAnswersCount;

  const taken = await TakeExam.create({
    userId,
    examId,
    submitDate,
    userAnswers,
    score,
    rightAnswersCount: 50 - wrongAnswersCount,
    wrongAnswersCount,
  });

  if (taken) {
    res.status(201).json({
      takenId: taken._id,
    });
  } else {
    res.status(400);
    throw new Error("Invalid exam data");
  }
});

/**
 * @desc Get exam score
 * @route GET /api/taken/:id
 * @access Private
 */
const getExamScore = asyncHandler(async (req, res) => {
  const taken = await TakeExam.findById(req.params.id);

  if (taken) {
    res.json({
      takenId: taken._id,
      rightAnswersCount: taken.rightAnswersCount,
      wrongAnswersCount: taken.wrongAnswersCount,
      score: taken.score,
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
      ...exam,
    });
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { submitExam, getExamScore, getExamDetailedAnswers };

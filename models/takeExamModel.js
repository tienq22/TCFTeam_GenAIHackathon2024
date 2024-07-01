import mongoose from "mongoose";

const { Schema } = mongoose;

const takeExamSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    examId: {
      type: Schema.Types.ObjectId,
      ref: "Exam",
      required: true,
    },
    submitDate: {
      type: Date,
      required: true,
    },
    userAnswers: {
      type: [Number],
      required: true,
    },
    score: {
      type: Number,
      required: true,
      default: 0,
    },
    rightAnswersCount: {
      type: Number,
      required: true,
      default: 0,
    },
    wrongAnswersCount: {
      type: Number,
      required: true,
      default: 50,
    },
  },
  {
    timestamps: true,
  }
);

const TakeExam = mongoose.model("TakeExam", takeExamSchema);

export default TakeExam;

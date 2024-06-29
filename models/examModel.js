import mongoose from "mongoose";
const { Schema } = mongoose;

const questionSchema = new Schema(
  {
    question: { type: String, required: true },
    options: { type: [String], required: true },
    correctOption: { type: String, required: true },
    answerDetail: { type: String, required: true },
  },
  { _id: false }
);

const fillInTheBlanksPassageSchema = new Schema(
  {
    questionType: {
      type: String,
      required: true,
      default:
        "Read the passage and fill in the blanks with suitable word or phrase.",
    },
    passage: { type: String, required: true },
    questions: { type: [questionSchema], required: true },
  },
  { _id: false }
);

const passageSchema = new Schema(
  {
    questionType: {
      type: String,
      required: true,
      default: "Read the passage and answer the questions.",
    },
    passage: { type: String, required: true },
    questions: { type: [questionSchema], required: true },
  },
  { _id: false }
);

const passagesSchema = new Schema(
  {
    questionType: {
      type: String,
      required: true,
      default: "Read the paired passages and answer the questions.",
    },
    passages: { type: [String], required: true },
    questions: { type: [questionSchema], required: true },
  },
  { _id: false }
);

const partSchema = new Schema(
  {
    questionType: { type: String, required: true },
    questions: { type: [questionSchema], required: true },
  },
  { _id: false }
);

const examSchema = new Schema(
  {
    parts: {
      part1: { type: partSchema, required: true },
      part2: { type: partSchema, required: true },
      part3: { type: partSchema, required: true },
      part4: { type: partSchema, required: true },
      part5: { type: partSchema, required: true },
      part6: { type: partSchema, required: true },
      part7: { type: fillInTheBlanksPassageSchema, required: true },
      part8: { type: passageSchema, required: true },
      part9: { type: passagesSchema, required: true },
      part10: { type: partSchema, required: true },
      part11: { type: partSchema, required: true },
      part12: { type: partSchema, required: true },
    },
  },
  { timestamps: true }
);

const Exam = mongoose.model("Exam", examSchema);
export default Exam;

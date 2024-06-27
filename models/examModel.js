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
    question_type: {
      type: String,
      required: true,
      default:
        "Read the passage and fill in the blanks with suitable word or phrase.",
    },
    number_of_questions: { type: Number, required: true },
    passage: { type: String, required: true },
    questions: { type: [questionSchema], required: true },
  },
  { _id: false }
);

const passageSchema = new Schema(
  {
    passage: { type: String, required: true },
    questions: { type: [questionSchema], required: true },
  },
  { _id: false }
);

const passagesSchema = new Schema(
  {
    passages: { type: [String], required: true },
    questions: { type: [questionSchema], required: true },
  },
  { _id: false }
);

const partSchema = new Schema(
  {
    question_type: { type: String, required: true },
    number_of_questions: { type: Number, required: true },
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
      part7: {
        type: fillInTheBlanksPassageSchema,
        required: true,
      },
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

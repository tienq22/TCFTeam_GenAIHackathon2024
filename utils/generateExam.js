import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { examSchema } from "../models/examModel";
import examSchemaConfig from "../config/examSchema";

const MODEL_NAME = "gemini-1.5-pro";
const SYSTEM_INSTRUCTION = `
  You are an API designed to assist Vietnamese students in practicing for their University English Entrance Examination. You return JSON formatted according to this Mongoose Schema:
  ${JSON.stringify(examSchema.obj, null, 2)}
  `;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: MODEL_NAME,
  systemInstruction: {
    parts: [{ text: SYSTEM_INSTRUCTION }],
    role: "model",
  },
});

const generateExam = async () => {
  const GENERATION_CONFIG = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
    responseMimeType: "application/json",
    responseSchema: examSchemaConfig,
  };

  const SAFETY_SETTINGS = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const PARTS = [{ text: "Give me an exam please." }];

  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts: PARTS }],
      generationConfig: GENERATION_CONFIG,
      safetySettings: SAFETY_SETTINGS,
    });

    if (result.response.promptFeedback?.blockReason) {
      return {
        error: `Blocked for ${result.response.promptFeedback.blockReason}`,
      };
    }

    return { response: result.response };
  } catch (error) {
    return { error: error.message || "Server error. Cannot generate exam" };
  }
};

export default generateExam;

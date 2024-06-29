import dotenv from "dotenv";
dotenv.config();
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import examSchemaConfig from "../config/examSchema.js";

const MODEL_NAME = "gemini-1.5-pro";

const SYSTEM_INSTRUCTION = `
  You are an API designed to assist Vietnamese students in practicing for their University English Entrance Examination. You return JSON formatted according to this JSON schema:
  ${JSON.stringify(examSchemaConfig, null, 2)}
`;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: MODEL_NAME,
  systemInstruction: {
    parts: [{ text: SYSTEM_INSTRUCTION }],
    role: "model",
  },
});

const fetchPart = async (partSchema, partNumber) => {
  const GENERATION_CONFIG = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
    responseMimeType: "application/json",
    responseSchema: partSchema,
  };

  const PARTS = [{ text: `Give me part ${partNumber} of the exam.` }];

  const result = await model.generateContent({
    contents: [{ role: "user", parts: PARTS }],
    generationConfig: GENERATION_CONFIG,
    safetySettings: [
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
    ],
  });

  try {
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

const generateExam = async () => {
  const allPartsResults = [];
  for (let i = 1; i <= 12; i++) {
    const partSchema =
      JSON.parse(examSchemaConfig).properties.parts.properties[`part${i}`];
    const result = await fetchPart(partSchema, i);
    if (result.error) {
      return { error: result.error };
    }
    allPartsResults.push(result.response);
  }
  return { response: allPartsResults };
};

export default generateExam;

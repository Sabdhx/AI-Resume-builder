import  {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
}   from "@google/generative-ai";

// const apiKey = import.meta.env.Gemini_API_KEY;
const genAI = new GoogleGenerativeAI("AIzaSyBlx9d9d2Ej8bfemyYSnqkIKPmgWryKmPw");

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

 export const AIchatSession = model.startChat({
    generationConfig,
    history: [
    ],
  });


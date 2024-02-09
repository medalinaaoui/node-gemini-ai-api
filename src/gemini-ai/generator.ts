import { GoogleGenerativeAI } from "@google/generative-ai";

async function run(prompt: string) {
  const genAI = await new GoogleGenerativeAI(
    process.env.GEMINI_AI_API_KEY as string
  );
  if (genAI) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  } else {
    console.log("genAI is null");
  }
}

export default run;

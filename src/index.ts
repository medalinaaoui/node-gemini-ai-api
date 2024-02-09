import express from "express";
import { Request, Response } from "express";
import run from "./gemini-ai/generator";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from my TypeScript Express server!");
  const prompt = "Write a story about a magic backpack.";
  run(prompt);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

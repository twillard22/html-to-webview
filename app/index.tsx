import WebviewComponent from "@/components/webview-components";
import Groq from "groq-sdk";
import React from "react";
import html from "../static/test.html";
const groq = new Groq({ apiKey: process.env.EXPO_PUBLIC_GROQ_API_KEY });

export async function getGroqChatCompletion(
  question: string = "Explain the importance of fast language models"
) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: question,
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
}

export default function Index() {
  // const [answer, setAnswer] = useState("");

  // useEffect(() => {
  //   getGroqChatCompletion(
  //     "can you generate html to show a small landing page, only return the html, no other text, and don't wrap it with any tags"
  //   ).then((answer) => {
  //     setAnswer(answer?.choices[0].message.content ?? "");
  //   });
  // }, []);

  return <WebviewComponent>{html}</WebviewComponent>;
}

import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;
      
      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API Key is missing. Please configure GEMINI_API_KEY in secrets." });
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const systemInstruction = `You are a cybersecurity expert AI assistant embedded within the 'Cyber Shield' app. 
      Your goal is to provide concise, accurate, and helpful cybersecurity advice. 
      Help users understand device security, phishing, network threats, and best practices.
      Keep your answers brief and easy to read.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
          ...history.map((msg: any) => ({
            role: msg.role === "ai" ? "model" : "user",
            parts: [{ text: msg.text }]
          })),
          { role: "user", parts: [{ text: message }]}
        ],
        config: { systemInstruction }
      });

      res.json({ reply: response.text });
    } catch (error: any) {
      console.error("Chat API error:", error);
      res.status(500).json({ error: "Failed to generate response. Check your API key and try again." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

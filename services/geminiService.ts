import { GoogleGenAI } from "@google/genai";
import { AspectRatio } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateImage = async (prompt: string, aspectRatio: AspectRatio = "16:9"): Promise<string | null> => {
  if (!ai) {
    console.warn("Gemini API Key is missing. Returning placeholder.");
    return null;
  }

  try {
    // Using 'gemini-2.5-flash-image' (Nano Banana) as requested
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: prompt,
          },
        ],
      },
      config: {
        imageConfig: {
            aspectRatio: aspectRatio,
        }
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64EncodeString: string = part.inlineData.data;
        return `data:image/png;base64,${base64EncodeString}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image with Gemini:", error);
    return null;
  }
};
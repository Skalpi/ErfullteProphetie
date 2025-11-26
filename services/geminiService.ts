import { GoogleGenAI, Type } from "@google/genai";
import { INITIAL_PROPHECIES } from "../constants";

let ai: GoogleGenAI | null = null;

export const initializeGemini = () => {
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
};

export const checkApiKey = () => {
    return !!process.env.API_KEY;
}

export const generateTheologicalInsight = async (prompt: string) => {
  if (!ai) initializeGemini();
  if (!ai) throw new Error("API Key missing");

  // Roger Liebi Context
  const systemInstruction = `
    Du bist ein Bibel-Experte, spezialisiert auf messianische Prophetie und Exegese im Stil von Roger Liebi (konservativ, hebräisch/griechisch fundiert, präzise).
    
    Dein Ziel ist es, die Herrlichkeit Jesu Christi durch die erfüllten Prophezeiungen des Alten Testaments aufzuzeigen.
    
    Kontext:
    - Roger Liebi betont die wörtliche Erfüllung.
    - Er nutzt mathematische Wahrscheinlichkeiten, um den göttlichen Ursprung zu beweisen.
    - Er verbindet Typologie (z.B. Opferfest) mit Prophetie.
    
    Antworte edel, präzise und bibeltreu. Formatiere wichtige Bibelstellen fett.
    Wenn der Nutzer nach spezifischen Prophezeiungen fragt, die nicht in der Liste sind, nenne diese mit Referenz (AT -> NT).
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        thinkingConfig: { thinkingBudget: 1024 }, // Encourage thoughtful connection finding if supported, otherwise ignored by model logic
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Entschuldigung, ich konnte momentan keine Verbindung zur theologischen Datenbank herstellen. Bitte versuchen Sie es später erneut.";
  }
};

export const fetchMoreProphecies = async (category: string) => {
    if (!ai) initializeGemini();
    if (!ai) throw new Error("API Key missing");

    const existingTitles = INITIAL_PROPHECIES.map(p => p.title).join(", ");
    
    const prompt = `Generiere 5 weitere spezifische biblische Prophezeiungen über Jesus Christus für die Kategorie "${category}", die NICHT in dieser Liste sind: [${existingTitles}].
    Antworte NUR im JSON Format.
    Schema:
    Array von Objekten: { title: string, oldTestament: string, newTestament: string, description: string }
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            title: { type: Type.STRING },
                            oldTestament: { type: Type.STRING },
                            newTestament: { type: Type.STRING },
                            description: { type: Type.STRING }
                        }
                    }
                }
            }
        });
        
        const jsonStr = response.text || "[]";
        return JSON.parse(jsonStr);
    } catch (e) {
        console.error(e);
        return [];
    }
}


import { GoogleGenAI } from "@google/genai";

export const askHistoryTutor = async (question: string): Promise<string> => {
  try {
    // API Key는 process.env.API_KEY에서 직접 가져옴
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: question,
      config: {
        systemInstruction: `당신은 'WCCW (Washington DC Coalition for Comfort Women)'의 역사 교육 AI 어시스턴트입니다. 
        일본군 '위안부' 역사에 대해 정확하고, 피해자 중심의 관점에서 답변하세요.
        
        답변 형식:
        1. 한국어로 친절하게 답변 (3~4문장).
        2. 바로 아래에 English Translation 제공.`,
        temperature: 0.7,
      },
    });

    // .text() 메서드가 아닌 .text 속성을 사용
    return response.text || "답변을 생성할 수 없습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI 서비스 연결 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
  }
};

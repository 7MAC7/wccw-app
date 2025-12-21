
import { GoogleGenAI } from "@google/genai";

export const askHistoryTutor = async (question: string): Promise<string> => {
  try {
    // API 호출 직전에 인스턴스를 생성하여 최신 API KEY를 사용하도록 함
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    console.log("Asking History Tutor:", question); 

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: question,
      config: {
        systemInstruction: `당신은 'WCCW (Washington DC Coalition for Comfort Women)'의 역사 교육 AI 어시스턴트입니다. 
        일본군 '위안부' 역사에 대해 정확하고, 피해자 중심의 관점에서, 존중과 공감을 담아 설명해야 합니다.
        역사적 사실(1930년대~1945년, 김학순 할머니 증언, 미 하원 결의안 121호 등)에 기반하여 답변하세요.
        
        답변 형식:
        1. 먼저 한국어로 친절하게 답변하세요 (3~4문장 요약).
        2. 그 바로 아래에 동일한 내용의 영어 번역(English Translation)을 제공하세요.
        
        모바일 화면에서 읽기 편하게 문단 나누기를 해주세요.`,
        temperature: 0.7,
      },
    });

    return response.text || "죄송합니다. 답변을 생성하는 데 문제가 발생했습니다.\nSorry, there was an issue generating the response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요.\n(API Key 설정을 확인해주세요)";
  }
};

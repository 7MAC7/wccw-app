import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, AlertCircle } from 'lucide-react';
import { ChatMessage } from '../types';
import { askHistoryTutor } from '../services/geminiService';

const HistoryChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '안녕하세요. 위안부 역사에 대해 궁금한 점이 있으신가요? 무엇이든 물어보세요.\n\nHello. Do you have any questions about the history of Comfort Women? Ask me anything.' }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    const responseText = await askHistoryTutor(userMessage);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mt-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4 border-b pb-2">
        <div className="flex items-center gap-2">
            <Bot className="text-wccw-purple" size={20} />
            <h3 className="font-bold text-gray-800">역사 AI 도우미 (AI History Tutor)</h3>
        </div>
      </div>

      <div className="h-64 overflow-y-auto mb-2 space-y-3 no-scrollbar bg-gray-50 p-3 rounded-lg">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-lg text-sm whitespace-pre-line ${
              msg.role === 'user' 
                ? 'bg-wccw-purple text-white rounded-tr-none' 
                : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
             <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-tl-none shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* AI Disclaimer */}
      <div className="flex items-start gap-1 mb-3 px-1">
        <AlertCircle size={10} className="text-gray-400 mt-0.5 shrink-0" />
        <p className="text-[10px] text-gray-400 leading-tight">
          AI가 생성한 답변은 부정확할 수 있습니다. 중요 정보는 공식 자료를 확인해주세요.<br/>
          AI-generated content may be inaccurate. Verify important info.
        </p>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="질문을 입력하세요 (Type a question)"
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-wccw-purple focus:ring-1 focus:ring-wccw-purple"
        />
        <button 
          onClick={handleSend}
          disabled={loading}
          className="bg-wccw-purple text-white p-2 rounded-full hover:bg-purple-800 disabled:opacity-50"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default HistoryChat;
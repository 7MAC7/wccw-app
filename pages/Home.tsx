
import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, ExternalLink, Share2, Quote, Sparkles } from 'lucide-react';
import { View } from '../types';
import { TESTIMONIES } from '../constants';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [randomQuote, setRandomQuote] = useState(TESTIMONIES[0]);

  useEffect(() => {
    const idx = Math.floor(Math.random() * TESTIMONIES.length);
    setRandomQuote(TESTIMONIES[idx]);
  }, []);

  return (
    <div className="space-y-8 pb-32">
      {/* 히어로 섹션 */}
      <div className="relative h-80 w-full overflow-hidden">
        <img 
          src="https://image.pollinations.ai/prompt/beautiful%20butterfly%20flying%20over%20a%20serene%20korean%20landscape%20at%20dawn%20watercolor%20style%20purple%20and%20gold%20tones%20peaceful%20justice%20symbol?width=800&height=1000&nologo=true"
          alt="Butterfly of Hope" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wccw-purple via-wccw-purple/40 to-transparent flex flex-col justify-end p-8">
          <div className="inline-flex items-center gap-2 bg-wccw-yellow/90 text-wccw-dark px-3 py-1 rounded-full text-[10px] font-bold mb-3 w-fit">
            <Sparkles size={12} /> TODAY'S HOPE
          </div>
          <h1 className="text-white text-3xl font-serif font-bold leading-tight mb-2">
            기억은 힘이 세다
          </h1>
          <p className="text-purple-100 text-xs font-light max-w-[85%] leading-relaxed">
            워싱턴 D.C. 정대위는 일본군 '위안부' 피해 할머님들의 명예 회복과 정의로운 해결을 위해 활동합니다.
          </p>
        </div>
      </div>

      {/* 오늘의 증언 카드 */}
      <div className="px-6 -mt-12 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-purple-50 transform transition-transform hover:scale-[1.02]">
          <Quote size={24} className="text-wccw-yellow mb-3 opacity-50" fill="currentColor" />
          <p className="text-base font-serif italic text-gray-800 leading-relaxed mb-4">
            "{randomQuote.content}"
          </p>
          <div className="flex justify-between items-center border-t border-gray-50 pt-4">
             <div className="flex flex-col">
               <span className="text-xs font-bold text-wccw-purple">{randomQuote.speaker}</span>
               <span className="text-[10px] text-gray-400">Living Witness of History</span>
             </div>
             <button 
              onClick={() => onNavigate(View.HISTORY)} 
              className="text-[10px] bg-purple-50 text-wccw-purple px-3 py-1.5 rounded-full font-bold hover:bg-purple-100"
             >
               자세히 보기
             </button>
          </div>
        </div>
      </div>

      {/* 퀵 액션 버튼 */}
      <div className="px-6 grid grid-cols-2 gap-4">
        <button 
          onClick={() => onNavigate(View.HISTORY)}
          className="bg-wccw-purple text-white p-6 rounded-3xl shadow-lg flex flex-col items-center gap-3 active:scale-95 transition-all"
        >
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
            <Calendar size={24} />
          </div>
          <span className="text-sm font-bold">역사 교육</span>
        </button>
        <button 
          onClick={() => onNavigate(View.COMMUNITY)}
          className="bg-white border-2 border-wccw-purple text-wccw-purple p-6 rounded-3xl shadow-lg flex flex-col items-center gap-3 active:scale-95 transition-all"
        >
          <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center">
            <Share2 size={24} />
          </div>
          <span className="text-sm font-bold">평화 메시지</span>
        </button>
      </div>

      {/* 최신 소식 섹션 */}
      <div className="px-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <div className="w-1.5 h-6 bg-wccw-yellow rounded-full"></div>
            WCCW 활동 소식
          </h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex gap-4 items-center">
            <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-inner">
               <img src="https://image.pollinations.ai/prompt/memorial%20park%20peaceful%20statue%20flowers?width=200&height=200&nologo=true" className="w-full h-full object-cover" alt="Memorial" />
            </div>
            <div className="flex-1">
              <span className="text-[10px] text-wccw-purple font-bold tracking-widest">ANNANDALE, VA</span>
              <h3 className="text-sm font-bold text-gray-800 leading-tight">평화의 소녀상 정기 보수 작업 완료</h3>
              <p className="text-[11px] text-gray-400 mt-1">버지니아 애난데일에 위치한 소녀상을...</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex gap-4 items-center">
            <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-inner">
               <img src="https://image.pollinations.ai/prompt/students%20learning%20history%20together%20diverse%20group?width=200&height=200&nologo=true" className="w-full h-full object-cover" alt="Education" />
            </div>
            <div className="flex-1">
              <span className="text-[10px] text-amber-500 font-bold tracking-widest">EDUCATION</span>
              <h3 className="text-sm font-bold text-gray-800 leading-tight">2025 여름방학 인권 캠프 안내</h3>
              <p className="text-[11px] text-gray-400 mt-1">차세대 리더들을 위한 인권 및 역사...</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 푸터 문구 */}
      <div className="px-10 py-12 text-center">
        <div className="w-12 h-[1px] bg-gray-200 mx-auto mb-6"></div>
        <p className="text-xs text-gray-400 font-serif leading-relaxed italic">
          "정의가 강물처럼 흐를 때까지,<br />우리는 멈추지 않을 것입니다."
        </p>
      </div>
    </div>
  );
};

export default Home;

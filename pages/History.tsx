import React from 'react';
import { HISTORY_TIMELINE, TESTIMONIES } from '../constants';
import HistoryChat from '../components/HistoryChat';
import { Share2, Clock, Quote } from 'lucide-react';

const History: React.FC = () => {
  const handleShare = async (title: string, description: string) => {
    const cleanTitle = title.replace(/\n/g, ' ');
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `WCCW History: ${cleanTitle}`,
          text: description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      alert(`History Event:\n\n${cleanTitle}\n\n${description}`);
    }
  };

  return (
    <div className="pb-24 px-6 pt-8 bg-gray-50 min-h-screen">
       <div className="mb-6 border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-serif font-bold text-gray-900 mb-2">역사의 진실</h1>
        <h2 className="text-sm font-serif text-gray-600 mb-3 uppercase tracking-widest">Truth of History</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          "역사를 잊은 민족에게 미래는 없습니다."<br/>
          올바른 역사를 기억하고 알리는 것이 정의의 시작입니다.
          <span className="block text-xs text-gray-500 mt-2 font-light italic">
            "A nation that forgets its history has no future."<br/>
            Remembering and spreading the correct history is the beginning of justice.
          </span>
        </p>
      </div>

      {/* AI Assistant Section */}
      <HistoryChat />

      {/* Testimonies Section */}
      <div className="mt-10 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="text-wccw-purple" size={20} />
          <h2 className="text-lg font-bold text-gray-800">할머니들의 목소리 <span className="text-sm font-normal text-gray-500 ml-1">Voices of Victims</span></h2>
        </div>
        <div className="grid gap-4">
          {TESTIMONIES.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-purple-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-wccw-purple"></div>
              <p className="font-serif text-gray-800 italic mb-2 text-sm leading-relaxed">"{item.content}"</p>
              <p className="font-serif text-gray-500 italic text-xs mb-3 leading-relaxed">"{item.contentEn}"</p>
              <p className="text-right text-xs font-bold text-wccw-purple flex items-center justify-end gap-1">
                <span className="w-4 h-[1px] bg-wccw-purple/50"></span>
                {item.speaker}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 mb-6 flex items-center gap-2">
        <Clock className="text-wccw-purple" size={20} />
        <h2 className="text-lg font-bold text-gray-800">주요 연혁 <span className="text-sm font-normal text-gray-500 ml-1">Key Timeline</span></h2>
      </div>

      {/* Timeline Component */}
      <div className="relative pl-6 space-y-10 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-wccw-purple/20 before:to-transparent">
        {HISTORY_TIMELINE.map((event, index) => (
          <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            {/* Timeline Dot */}
            <div className="absolute -left-[27px] top-1.5 h-6 w-6 rounded-full border-4 border-gray-50 bg-wccw-purple shadow-sm z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 relative group">
              <button 
                onClick={() => handleShare(event.title, event.description)}
                className="absolute top-4 right-4 text-gray-300 hover:text-wccw-purple p-1 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Share event"
              >
                <Share2 size={16} />
              </button>
              
              <div className="inline-block px-3 py-1 rounded-full bg-wccw-purple/10 text-wccw-purple text-xs font-bold mb-3">
                {event.year}
              </div>
              <h3 className="font-bold text-gray-800 mb-2 whitespace-pre-line leading-tight text-lg">{event.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-xs text-gray-400">
          * 이 타임라인은 주요 사건을 요약한 것입니다.<br/>더 자세한 내용은 AI 도우미에게 물어보세요.
        </p>
      </div>
    </div>
  );
};

export default History;
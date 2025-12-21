import React from 'react';
import { ArrowRight, Calendar, ExternalLink, Share2 } from 'lucide-react';
import { View } from '../types';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const handleShare = async (title: string, text: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `WCCW: ${title}`,
          text: text,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      alert(`Share Content:\n\n${title}\n\n${text}`);
    }
  };

  return (
    <div className="space-y-6 pb-24">
      {/* Hero Section */}
      <div className="relative h-64 w-full rounded-b-3xl overflow-hidden shadow-lg">
        <img 
          src="https://image.pollinations.ai/prompt/cinematic%20double%20exposure%20of%20a%2016%20year%20old%20korean%20girl%20in%201940s%20war%20era%20and%20a%20sad%20elderly%20korean%20grandmother%20wearing%20white%20traditional%20korean%20hanbok%20black%20and%20white%20emotional%20historical%20no%20japanese%20clothing?width=800&height=600&nologo=true"
          alt="16 year old Korean girl and elderly grandmother wearing white Hanbok" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wccw-purple/90 to-transparent flex flex-col justify-end p-6">
          <span className="text-wccw-yellow text-xs font-bold uppercase tracking-wider mb-2">Since 1992</span>
          <h1 className="text-white text-xl font-serif font-bold leading-tight">
            일제 일본군의 만행이<br />또다시 일어나지 않기를...<br />
            <span className="text-sm font-normal opacity-90 mt-1 block">May the atrocities of the past Japanese military never happen again in this world..</span>
          </h1>
        </div>
      </div>

      {/* Quick Action */}
      <div className="px-6 -mt-6 relative z-10">
        <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between border border-gray-100">
          <div>
            <h2 className="font-bold text-gray-800 text-sm">함께 행동해주세요 <span className="block text-[10px] text-gray-400 font-normal">Take Action Together</span></h2>
            <p className="text-xs text-gray-500 mt-1">역사를 바로 알고 할머니의 원혼을 위로합시다<br/><span className="text-[10px]">Let's know history correctly and comfort the grandmothers' souls</span></p>
          </div>
          <button 
            onClick={() => onNavigate(View.DONATE)}
            className="bg-wccw-yellow text-wccw-dark px-3 py-2 rounded-lg text-xs font-bold flex flex-col items-center justify-center gap-0 hover:bg-yellow-400 min-w-[80px]"
          >
            <div className="flex items-center gap-1">후원하기 <ArrowRight size={12} /></div>
            <span className="text-[10px] opacity-80">Donate</span>
          </button>
        </div>
      </div>

      {/* News/Updates Mockup */}
      <div className="px-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-800 border-l-4 border-wccw-purple pl-3">
            최신 소식 <span className="text-xs text-gray-400 font-normal ml-1">Latest News</span>
          </h2>
          <span className="text-xs text-gray-400">View All</span>
        </div>

        <div className="space-y-3">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative">
            <button 
              onClick={() => handleShare('제 1600차 정기 수요시위', '일본대사관 앞에서 진행된 제 1600차 수요시위에 워싱턴 DC 연대도 함께했습니다.')}
              className="absolute top-4 right-4 text-gray-400 hover:text-wccw-purple p-1 z-10"
              aria-label="Share news"
            >
              <Share2 size={16} />
            </button>
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 p-2 rounded-lg text-wccw-purple shrink-0">
                <Calendar size={20} />
              </div>
              <div className="pr-6">
                <span className="text-xs text-wccw-purple font-bold block mb-1">2023.10.25</span>
                <h3 className="text-sm font-bold text-gray-800 mb-1">제 1600차 정기 수요시위<br/><span className="text-xs text-gray-500 font-normal">1600th Wednesday Demonstration</span></h3>
                <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                  일본대사관 앞에서 진행된 제 1600차 수요시위에 워싱턴 DC 연대도 함께했습니다.
                  (WCCW joined the 1600th Wednesday Demonstration in front of the Japanese Embassy.)
                </p>
              </div>
            </div>
          </div>

           <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative">
            <button 
              onClick={() => handleShare('워싱턴 포스트 기고문 게재', 'WCCW 이사장이 워싱턴 포스트에 기고한 "역사를 잊지 말아야 하는 이유" 칼럼이 화제입니다.')}
              className="absolute top-4 right-4 text-gray-400 hover:text-wccw-purple p-1 z-10"
              aria-label="Share news"
            >
              <Share2 size={16} />
            </button>
            <div className="flex items-start gap-3">
              <div className="bg-yellow-100 p-2 rounded-lg text-yellow-700 shrink-0">
                <ExternalLink size={20} />
              </div>
              <div className="pr-6">
                <span className="text-xs text-yellow-600 font-bold block mb-1">언론 보도 (Press)</span>
                <h3 className="text-sm font-bold text-gray-800 mb-1">워싱턴 포스트 기고문 게재<br/><span className="text-xs text-gray-500 font-normal">Op-ed in Washington Post</span></h3>
                <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                  WCCW 이사장이 워싱턴 포스트에 기고한 '역사를 잊지 말아야 하는 이유' 칼럼이 화제입니다.
                  (The Chairman's op-ed 'Why We Must Not Forget History' is drawing attention.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
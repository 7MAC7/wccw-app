
import React from 'react';
import { Target, MapPin, Mail, Phone, Globe, Heart, Info, Instagram } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pb-32 pt-6 bg-gray-50 min-h-screen">
      {/* 단체 로고 배너 */}
      <div className="px-6 mb-10">
        <div className="bg-wccw-purple rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
           <div className="absolute bottom-0 left-0 w-32 h-32 bg-wccw-yellow/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>
           
           <h1 className="text-3xl font-serif font-bold mb-2">워싱턴 정대위</h1>
           <p className="text-xs opacity-70 font-light tracking-[0.1em] uppercase">Washington DC Coalition for <br/>Comfort Women (WCCW)</p>
           
           <div className="mt-8 flex flex-wrap gap-2">
             <div className="px-4 py-1.5 bg-wccw-yellow text-wccw-dark text-[10px] font-extrabold rounded-full shadow-lg">SINCE 1992</div>
             <div className="px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold rounded-full">501(c)(3) NGO</div>
           </div>
        </div>
      </div>

      <div className="px-6 space-y-10">
        {/* 미션 섹션 */}
        <section className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-wccw-purple">
              <Target size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 tracking-tight">우리의 사명</h2>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm leading-relaxed text-[15px] text-gray-600 font-light">
            <p className="mb-4"><strong className="text-wccw-purple font-bold">WCCW</strong>는 미국 수도 워싱턴 D.C.를 거점으로 일본군 '위안부' 역사의 진실을 알리고 피해자들의 인권과 존엄 회복을 위해 노력하는 비영리 단체입니다.</p>
            <p>우리는 교육, 옹호 활동, 그리고 국제적 연대를 통해 인류 보편적인 인권 가치를 실현하고 평화로운 세상을 만드는 데 기여합니다.</p>
          </div>
        </section>

        {/* 워싱턴 기림비 정보 */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500">
              <MapPin size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 tracking-tight">워싱턴 인근 기림비</h2>
          </div>
          <div className="grid gap-4">
            <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 shrink-0">
                <Info size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-800 mb-1">페어팩스 카운티 기림비</h4>
                <p className="text-[11px] text-gray-500 leading-snug">미 동부 최초의 기림비로, 2014년 페어팩스 카운티 청사 내 평화의 정원에 건립되었습니다.</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-800 mb-1">애난데일 평화의 소녀상</h4>
                <p className="text-[11px] text-gray-500 leading-snug">2019년 워싱턴 D.C. 인근 한인 타운인 애난데일에 세워진 평화와 인권의 상징입니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 연락처 섹션 */}
        <section className="bg-white p-8 rounded-[2rem] shadow-xl border border-purple-50">
           <h2 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-2">
             <div className="w-1.5 h-6 bg-wccw-yellow rounded-full"></div>
             Connect with Us
           </h2>
           <div className="space-y-6">
             <a href="mailto:wccwcontact@gmail.com" className="flex items-center gap-5 group">
               <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-50 group-hover:text-wccw-purple transition-all shadow-sm">
                 <Mail size={20} />
               </div>
               <div>
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Email</p>
                 <p className="text-sm text-gray-700 font-medium">wccwcontact@gmail.com</p>
               </div>
             </a>
             
             <a href="tel:2026690666" className="flex items-center gap-5 group">
               <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-50 group-hover:text-wccw-purple transition-all shadow-sm">
                 <Phone size={20} />
               </div>
               <div>
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Phone</p>
                 <p className="text-sm text-gray-700 font-medium">202-669-0666</p>
               </div>
             </a>

             <div className="flex gap-4 pt-4 border-t border-gray-50 mt-4">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600"><Instagram size={18} /></div>
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600"><Globe size={18} /></div>
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600"><Heart size={18} /></div>
             </div>
           </div>
        </section>

        {/* 앱 정보 하단 */}
        <div className="py-8 text-center">
            <p className="text-[10px] text-gray-300 font-light tracking-[0.3em] uppercase">
                WCCW OFFICIAL APP v1.0.0
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;

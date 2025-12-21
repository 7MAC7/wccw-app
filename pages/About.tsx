import React from 'react';
import { Users, Target, Award, MapPin, Mail, Phone, Globe, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pb-24 px-6 pt-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-serif font-bold text-gray-900 mb-1">WCCW 소개</h1>
        <h2 className="text-sm font-serif text-gray-600 uppercase tracking-widest mb-4">About WCCW</h2>
        <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-wccw-purple">Washington DC Coalition for Comfort Women</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Mission Card */}
        <div className="bg-gradient-to-br from-wccw-purple to-purple-900 p-6 rounded-2xl shadow-lg text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Target size={20} className="text-white" />
            </div>
            <h2 className="text-lg font-bold">우리의 사명 (Mission)</h2>
          </div>
          <p className="text-sm leading-relaxed opacity-90 mb-4">
            WCCW는 1992년 12월, 일본군 성노예 피해자들의 인권 회복과 진상 규명을 위해 워싱턴 DC에서 설립되었습니다.
            우리는 역사를 잊지 않고, 다음 세대에게 인권과 평화의 소중함을 교육합니다.
          </p>
          <p className="text-xs leading-relaxed opacity-70 italic border-t border-white/20 pt-3">
            Established in Dec 1992, WCCW is dedicated to restoring human rights for 'Comfort Women' victims. We educate the next generation on the value of peace.
          </p>
        </div>

        {/* Key Achievements Grid */}
        <div className="space-y-3">
          <h3 className="font-bold text-gray-800 text-sm pl-2 border-l-4 border-wccw-yellow">주요 활동 (Key Activities)</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <Award className="text-wccw-yellow mb-2" size={24} />
              <h4 className="font-bold text-gray-800 text-sm mb-1">결의안 121호</h4>
              <p className="text-[10px] text-gray-500">2007년 미 하원 위안부 결의안 통과 주도</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <Users className="text-blue-500 mb-2" size={24} />
              <h4 className="font-bold text-gray-800 text-sm mb-1">인권 교육</h4>
              <p className="text-[10px] text-gray-500">미국 주류 사회 및 차세대 대상 역사 교육</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <Globe className="text-green-500 mb-2" size={24} />
              <h4 className="font-bold text-gray-800 text-sm mb-1">국제 연대</h4>
              <p className="text-[10px] text-gray-500">앰네스티 등 국제 인권 단체와 협력</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <MapPin className="text-red-500 mb-2" size={24} />
              <h4 className="font-bold text-gray-800 text-sm mb-1">기림비 건립</h4>
              <p className="text-[10px] text-gray-500">워싱턴 DC 및 버지니아 지역 기림비 관리</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
           <h2 className="text-base font-bold text-gray-800 mb-4 border-b border-gray-100 pb-2">
             연락처 <span className="text-xs font-normal text-gray-500 ml-1">Contact Us</span>
           </h2>
           <div className="space-y-4">
             <div className="flex items-center gap-3 text-sm text-gray-600 group">
               <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-50 group-hover:text-wccw-purple transition-colors">
                 <MapPin size={16} />
               </div>
               <div className="flex flex-col">
                 <span className="text-xs text-gray-400">Address</span>
                 <span>Annandale, VA, United States</span>
               </div>
             </div>
             
             <div className="flex items-center gap-3 text-sm text-gray-600 group">
               <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-50 group-hover:text-wccw-purple transition-colors">
                 <Mail size={16} />
               </div>
               <div className="flex flex-col">
                 <span className="text-xs text-gray-400">Email</span>
                 <a href="mailto:wccwcontact@gmail.com" className="text-blue-600 hover:underline">wccwcontact@gmail.com</a>
               </div>
             </div>

             <div className="flex items-center gap-3 text-sm text-gray-600 group">
               <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-50 group-hover:text-wccw-purple transition-colors">
                 <Phone size={16} />
               </div>
               <div className="flex flex-col">
                 <span className="text-xs text-gray-400">Phone</span>
                 <a href="tel:2026690666" className="hover:text-wccw-purple">202-669-0666</a>
               </div>
             </div>
           </div>
        </div>
        
        {/* App Info & Privacy */}
        <div className="mt-6 border-t border-gray-200 pt-6 text-center">
            <a href="https://wccw.org/privacy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-wccw-purple mb-2">
                <ShieldCheck size={12} />
                <span>개인정보처리방침 (Privacy Policy)</span>
            </a>
            <div className="text-[10px] text-gray-400">
                Version 1.0.0<br/>
                © 2024 Washington DC Coalition for Comfort Women.<br/>All rights reserved.
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
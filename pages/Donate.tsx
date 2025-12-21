import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { DONATION_DATA } from '../constants';
import { Heart, CreditCard, Gift } from 'lucide-react';

const Donate: React.FC = () => {
  return (
    <div className="pb-24 px-6 pt-8 bg-gray-50 min-h-screen">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-wccw-yellow/20 text-yellow-600 rounded-full mb-4">
          <Heart size={32} fill="currentColor" />
        </div>
        <h1 className="text-2xl font-serif font-bold text-gray-900 mb-1">후원 안내</h1>
        <h2 className="text-lg font-serif text-gray-600 mb-2">Donation Guide</h2>
        <p className="text-sm text-gray-500">
          할머님들의 명예 회복을 위한 여정에 함께해주세요.<br/>
          <span className="text-xs">Join us in the journey to restore the honor of the grandmothers.</span>
        </p>
      </div>

      {/* Fundraising Status Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
        <h2 className="text-sm font-bold text-gray-600 mb-1 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-wccw-purple"></div>
          2025년 월별 후원 현황
        </h2>
        <p className="text-xs text-gray-400 mb-4 ml-4">Monthly Donation Status 2025</p>
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={DONATION_DATA}>
              <XAxis dataKey="name" fontSize={10} tickLine={false} axisLine={false} interval={0} />
              <YAxis hide />
              <Tooltip 
                cursor={{fill: '#f3f4f6'}}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              />
              <Bar dataKey="amount" fill="#6B21A8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-xs text-gray-400 mt-2">* 단위 (Unit): USD</p>
      </div>

      {/* Donation Methods */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-gray-800">후원 방법 <span className="text-sm font-normal text-gray-500 ml-1">How to Donate</span></h2>
        
        <button className="w-full bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4 hover:border-wccw-purple transition-colors group">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
            <CreditCard size={20} />
          </div>
          <div className="text-left">
            <div className="font-bold text-gray-800 group-hover:text-wccw-purple text-sm">신용카드 / PayPal (Credit Card)</div>
            <div className="text-xs text-gray-500">간편하게 일시/정기 후원하기<br/>Simple one-time/recurring donation</div>
          </div>
        </button>

        <button className="w-full bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4 hover:border-wccw-purple transition-colors group">
          <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0">
            <Gift size={20} />
          </div>
          <div className="text-left">
            <div className="font-bold text-gray-800 group-hover:text-wccw-purple text-sm">은행 송금 (Check / Bank Transfer)</div>
            <div className="text-xs text-gray-500">우편 발송 및 계좌 이체<br/>Mail check or bank transfer</div>
          </div>
        </button>
      </div>

      {/* Impact Statement */}
      <div className="mt-8 bg-wccw-dark text-white p-6 rounded-2xl">
        <h3 className="font-bold text-lg mb-1">후원금은 이렇게 쓰입니다</h3>
        <h4 className="text-xs text-gray-400 mb-3">How Donations Are Used</h4>
        <ul className="space-y-3 text-sm text-gray-300 list-disc pl-4">
          <li>
            미국 내 위안부 역사 교육 자료 제작
            <span className="block text-xs text-gray-500 mt-1">Production of history education materials in the US</span>
          </li>
          <li>
            기림비 유지 보수 및 관리
            <span className="block text-xs text-gray-500 mt-1">Maintenance of memorials</span>
          </li>
          <li>
            피해자 할머니 지원 사업
            <span className="block text-xs text-gray-500 mt-1">Support for victim grandmothers</span>
          </li>
          <li>
            차세대 인권 리더 양성 프로그램
            <span className="block text-xs text-gray-500 mt-1">Next-generation human rights leader training</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Donate;
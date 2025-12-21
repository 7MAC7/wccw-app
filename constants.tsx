import React from 'react';
import { View, HistoryEvent } from './types';
import { Home, Info, BookOpen, Heart, MessageSquare } from 'lucide-react';

export const NAV_ITEMS = [
  { id: View.HOME, label: '홈\nHome', icon: <Home size={24} /> },
  { id: View.ABOUT, label: '소개\nAbout', icon: <Info size={24} /> },
  { id: View.HISTORY, label: '역사\nHistory', icon: <BookOpen size={24} /> },
  { id: View.COMMUNITY, label: '나눔\nBoard', icon: <MessageSquare size={24} /> },
  { id: View.DONATE, label: '후원\nDonate', icon: <Heart size={24} /> },
];

export const TESTIMONIES = [
  {
    speaker: "김학순 (Kim Hak-soon)",
    content: "우리가 강요에 못 이겨 했던 그 일을 역사에 남겨두어야 한다.",
    contentEn: "We must leave behind in history the things we were forced to do."
  },
  {
    speaker: "김복동 (Kim Bok-dong)",
    content: "나비처럼 날아서 널리 알리고 싶다. 다시는 이런 일이 없도록.",
    contentEn: "I want to fly like a butterfly and let the world know, so that this never happens again."
  },
  {
    speaker: "이용수 (Lee Yong-soo)",
    content: "나는 역사의 산 증인이다. 사죄와 배상을 요구한다.",
    contentEn: "I am a living witness of history. I demand an apology and reparations."
  }
];

export const HISTORY_TIMELINE: HistoryEvent[] = [
  {
    year: '1930s-1945',
    title: '제도화된 성노예제\n(Institutionalized Sexual Slavery)',
    description: '일본 제국주의 군대가 아시아 전역에서 수십만 명의 여성들을 조직적으로 동원하여 성노예로 삼았습니다. 이는 명백한 전시 성폭력 범죄였습니다.\nThe Japanese Imperial Army systematically mobilized hundreds of thousands of women across Asia into sexual slavery. It was a clear wartime sexual violence crime.'
  },
  {
    year: '1991',
    title: '김학순 할머니의 최초 공개 증언\n(First Public Testimony)',
    description: '8월 14일, 故 김학순 할머니께서 자신이 일본군 위안부 피해자였음을 실명으로 공개 증언하며 반세기의 침묵을 깼습니다.\nOn August 14, the late Hak-soon Kim broke half a century of silence by publicly testifying as a victim under her real name.'
  },
  {
    year: '1992',
    title: '수요시위 시작 & WCCW 설립\n(Wed. Demo & WCCW Founding)',
    description: '1월 8일, 일본 대사관 앞에서 첫 수요시위가 열렸습니다. 같은 해 12월, 워싱턴 DC 정신대문제 대책위원회(WCCW)가 설립되었습니다.\nThe first Wednesday Demonstration was held on Jan 8. In Dec, WCCW was established in Washington DC.'
  },
  {
    year: '1993',
    title: '고노 담화 발표\n(Kono Statement)',
    description: '일본 정부가 위안부 동원의 강제성과 관여를 일부 인정하고 사과한 고노 담화가 발표되었습니다.\nThe Japanese government issued the Kono Statement, acknowledging coercion and involvement in the mobilization of comfort women.'
  },
  {
    year: '2000',
    title: '여성국제전범법정\n(Women\'s Tribunal 2000)',
    description: '도쿄에서 열린 민간 법정에서 히로히토 일왕에게 유죄 판결을 내리며, 성노예제가 인도에 반한 죄임을 선언했습니다.\nThe civic tribunal in Tokyo found Emperor Hirohito guilty and declared sexual slavery a crime against humanity.'
  },
  {
    year: '2007',
    title: '미 하원 결의안 121호 통과\n(Passage of H.Res.121)',
    description: 'WCCW가 주도적인 역할을 하여, 미국 하원에서 일본 정부의 공식 사과를 요구하는 결의안(H.Res.121)이 만장일치로 통과되었습니다.\nLed by WCCW, the U.S. House unanimously passed H.Res.121, demanding an official apology from Japan.'
  },
  {
    year: '현재',
    title: '정의를 향한 계속된 여정\n(Continuing Journey for Justice)',
    description: '워싱턴 DC를 중심으로 기림비 건립, 차세대 교육, 국제 연대 활동을 통해 정의 실현과 인권 회복을 위해 노력하고 있습니다.\nCentered in DC, we strive for justice and human rights through memorials, education, and international solidarity.'
  }
];

export const DONATION_DATA = [
  { name: '1월 Jan', amount: 4200 },
  { name: '2월 Feb', amount: 3100 },
  { name: '3월 Mar', amount: 2500 },
  { name: '4월 Apr', amount: 2780 },
  { name: '5월 May', amount: 4890 },
  { name: '6월 Jun', amount: 3390 },
  { name: '7월 Jul', amount: 3490 },
];
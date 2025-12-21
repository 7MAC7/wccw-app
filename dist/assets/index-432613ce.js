import{r as st,a as Rc,R as Cc}from"./vendor-8a332d8f.js";import{H as Pc,I as Sc,B as Nc,M as Vc,a as da,A as Dc,S as ns,C as kc,E as jc,T as Oc,b as Mc,U as Lc,G as Fc,c as lo,d as Uc,P as Bc,e as qc,f as zc,g as $c,h as Wc,Q as Hc,i as Kc,j as Gc,k as Qc,l as Yc,L as Xc,m as Jc,n as Zc,X as co,o as uo,p as tu,q as eu}from"./icons-ba5ef80b.js";import{G as nu}from"./genai-4f9b214d.js";import{R as ru,B as su,X as iu,Y as ou,T as au,a as lu}from"./charts-6cfd5422.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();var fa={exports:{}},ur={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cu=st,uu=Symbol.for("react.element"),hu=Symbol.for("react.fragment"),du=Object.prototype.hasOwnProperty,fu=cu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mu={key:!0,ref:!0,__self:!0,__source:!0};function ma(n,t,e){var r,i={},o=null,a=null;e!==void 0&&(o=""+e),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)du.call(t,r)&&!mu.hasOwnProperty(r)&&(i[r]=t[r]);if(n&&n.defaultProps)for(r in t=n.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:uu,type:n,key:o,ref:a,props:i,_owner:fu.current}}ur.Fragment=hu;ur.jsx=ma;ur.jsxs=ma;fa.exports=ur;var f=fa.exports,rs={},ho=Rc;rs.createRoot=ho.createRoot,rs.hydrateRoot=ho.hydrateRoot;var At=(n=>(n.HOME="HOME",n.ABOUT="ABOUT",n.HISTORY="HISTORY",n.DONATE="DONATE",n.COMMUNITY="COMMUNITY",n))(At||{});const pu=[{id:At.HOME,label:`홈
Home`,icon:f.jsx(Pc,{size:24})},{id:At.ABOUT,label:`소개
About`,icon:f.jsx(Sc,{size:24})},{id:At.HISTORY,label:`역사
History`,icon:f.jsx(Nc,{size:24})},{id:At.COMMUNITY,label:`나눔
Board`,icon:f.jsx(Vc,{size:24})},{id:At.DONATE,label:`후원
Donate`,icon:f.jsx(da,{size:24})}],gu=[{speaker:"김학순 (Kim Hak-soon)",content:"우리가 강요에 못 이겨 했던 그 일을 역사에 남겨두어야 한다.",contentEn:"We must leave behind in history the things we were forced to do."},{speaker:"김복동 (Kim Bok-dong)",content:"나비처럼 날아서 널리 알리고 싶다. 다시는 이런 일이 없도록.",contentEn:"I want to fly like a butterfly and let the world know, so that this never happens again."},{speaker:"이용수 (Lee Yong-soo)",content:"나는 역사의 산 증인이다. 사죄와 배상을 요구한다.",contentEn:"I am a living witness of history. I demand an apology and reparations."}],_u=[{year:"1930s-1945",title:`제도화된 성노예제
(Institutionalized Sexual Slavery)`,description:`일본 제국주의 군대가 아시아 전역에서 수십만 명의 여성들을 조직적으로 동원하여 성노예로 삼았습니다. 이는 명백한 전시 성폭력 범죄였습니다.
The Japanese Imperial Army systematically mobilized hundreds of thousands of women across Asia into sexual slavery. It was a clear wartime sexual violence crime.`},{year:"1991",title:`김학순 할머니의 최초 공개 증언
(First Public Testimony)`,description:`8월 14일, 故 김학순 할머니께서 자신이 일본군 위안부 피해자였음을 실명으로 공개 증언하며 반세기의 침묵을 깼습니다.
On August 14, the late Hak-soon Kim broke half a century of silence by publicly testifying as a victim under her real name.`},{year:"1992",title:`수요시위 시작 & WCCW 설립
(Wed. Demo & WCCW Founding)`,description:`1월 8일, 일본 대사관 앞에서 첫 수요시위가 열렸습니다. 같은 해 12월, 워싱턴 DC 정신대문제 대책위원회(WCCW)가 설립되었습니다.
The first Wednesday Demonstration was held on Jan 8. In Dec, WCCW was established in Washington DC.`},{year:"1993",title:`고노 담화 발표
(Kono Statement)`,description:`일본 정부가 위안부 동원의 강제성과 관여를 일부 인정하고 사과한 고노 담화가 발표되었습니다.
The Japanese government issued the Kono Statement, acknowledging coercion and involvement in the mobilization of comfort women.`},{year:"2000",title:`여성국제전범법정
(Women's Tribunal 2000)`,description:`도쿄에서 열린 민간 법정에서 히로히토 일왕에게 유죄 판결을 내리며, 성노예제가 인도에 반한 죄임을 선언했습니다.
The civic tribunal in Tokyo found Emperor Hirohito guilty and declared sexual slavery a crime against humanity.`},{year:"2007",title:`미 하원 결의안 121호 통과
(Passage of H.Res.121)`,description:`WCCW가 주도적인 역할을 하여, 미국 하원에서 일본 정부의 공식 사과를 요구하는 결의안(H.Res.121)이 만장일치로 통과되었습니다.
Led by WCCW, the U.S. House unanimously passed H.Res.121, demanding an official apology from Japan.`},{year:"현재",title:`정의를 향한 계속된 여정
(Continuing Journey for Justice)`,description:`워싱턴 DC를 중심으로 기림비 건립, 차세대 교육, 국제 연대 활동을 통해 정의 실현과 인권 회복을 위해 노력하고 있습니다.
Centered in DC, we strive for justice and human rights through memorials, education, and international solidarity.`}],yu=[{name:"1월 Jan",amount:4200},{name:"2월 Feb",amount:3100},{name:"3월 Mar",amount:2500},{name:"4월 Apr",amount:2780},{name:"5월 May",amount:4890},{name:"6월 Jun",amount:3390},{name:"7월 Jul",amount:3490}],vu=({currentView:n,onNavigate:t})=>f.jsx("div",{className:"fixed bottom-0 left-0 right-0 mx-auto max-w-md bg-white border-t border-gray-200 pb-6 pt-2 px-1 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50",children:f.jsx("div",{className:"flex justify-between items-start max-w-md mx-auto pb-4 px-1",children:pu.map(e=>{const r=n===e.id;return f.jsxs("button",{onClick:()=>t(e.id),className:`flex flex-col items-center justify-start flex-1 transition-colors duration-200 ${r?"text-wccw-purple font-bold":"text-gray-400 hover:text-gray-600"}`,children:[f.jsx("div",{className:`mb-1 transition-transform duration-200 ${r?"scale-110":""}`,children:e.icon}),f.jsx("span",{className:"text-[10px] text-center whitespace-pre-line leading-tight",children:e.label})]},e.id)})})}),fo=({onNavigate:n})=>{const t=async(e,r)=>{if(navigator.share)try{await navigator.share({title:`WCCW: ${e}`,text:r,url:window.location.href})}catch(i){console.log("Error sharing:",i)}else alert(`Share Content:

${e}

${r}`)};return f.jsxs("div",{className:"space-y-6 pb-24",children:[f.jsxs("div",{className:"relative h-64 w-full rounded-b-3xl overflow-hidden shadow-lg",children:[f.jsx("img",{src:"https://image.pollinations.ai/prompt/cinematic%20double%20exposure%20of%20a%2016%20year%20old%20korean%20girl%20in%201940s%20war%20era%20and%20a%20sad%20elderly%20korean%20grandmother%20wearing%20white%20traditional%20korean%20hanbok%20black%20and%20white%20emotional%20historical%20no%20japanese%20clothing?width=800&height=600&nologo=true",alt:"16 year old Korean girl and elderly grandmother wearing white Hanbok",className:"w-full h-full object-cover"}),f.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-wccw-purple/90 to-transparent flex flex-col justify-end p-6",children:[f.jsx("span",{className:"text-wccw-yellow text-xs font-bold uppercase tracking-wider mb-2",children:"Since 1992"}),f.jsxs("h1",{className:"text-white text-xl font-serif font-bold leading-tight",children:["일제 일본군의 만행이",f.jsx("br",{}),"또다시 일어나지 않기를...",f.jsx("br",{}),f.jsx("span",{className:"text-sm font-normal opacity-90 mt-1 block",children:"May the atrocities of the past Japanese military never happen again in this world.."})]})]})]}),f.jsx("div",{className:"px-6 -mt-6 relative z-10",children:f.jsxs("div",{className:"bg-white rounded-xl shadow-md p-4 flex items-center justify-between border border-gray-100",children:[f.jsxs("div",{children:[f.jsxs("h2",{className:"font-bold text-gray-800 text-sm",children:["함께 행동해주세요 ",f.jsx("span",{className:"block text-[10px] text-gray-400 font-normal",children:"Take Action Together"})]}),f.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["역사를 바로 알고 할머니의 원혼을 위로합시다",f.jsx("br",{}),f.jsx("span",{className:"text-[10px]",children:"Let's know history correctly and comfort the grandmothers' souls"})]})]}),f.jsxs("button",{onClick:()=>n(At.DONATE),className:"bg-wccw-yellow text-wccw-dark px-3 py-2 rounded-lg text-xs font-bold flex flex-col items-center justify-center gap-0 hover:bg-yellow-400 min-w-[80px]",children:[f.jsxs("div",{className:"flex items-center gap-1",children:["후원하기 ",f.jsx(Dc,{size:12})]}),f.jsx("span",{className:"text-[10px] opacity-80",children:"Donate"})]})]})}),f.jsxs("div",{className:"px-6 space-y-4",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("h2",{className:"text-lg font-bold text-gray-800 border-l-4 border-wccw-purple pl-3",children:["최신 소식 ",f.jsx("span",{className:"text-xs text-gray-400 font-normal ml-1",children:"Latest News"})]}),f.jsx("span",{className:"text-xs text-gray-400",children:"View All"})]}),f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative",children:[f.jsx("button",{onClick:()=>t("제 1600차 정기 수요시위","일본대사관 앞에서 진행된 제 1600차 수요시위에 워싱턴 DC 연대도 함께했습니다."),className:"absolute top-4 right-4 text-gray-400 hover:text-wccw-purple p-1 z-10","aria-label":"Share news",children:f.jsx(ns,{size:16})}),f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx("div",{className:"bg-purple-100 p-2 rounded-lg text-wccw-purple shrink-0",children:f.jsx(kc,{size:20})}),f.jsxs("div",{className:"pr-6",children:[f.jsx("span",{className:"text-xs text-wccw-purple font-bold block mb-1",children:"2023.10.25"}),f.jsxs("h3",{className:"text-sm font-bold text-gray-800 mb-1",children:["제 1600차 정기 수요시위",f.jsx("br",{}),f.jsx("span",{className:"text-xs text-gray-500 font-normal",children:"1600th Wednesday Demonstration"})]}),f.jsx("p",{className:"text-xs text-gray-500 line-clamp-2 mt-1",children:"일본대사관 앞에서 진행된 제 1600차 수요시위에 워싱턴 DC 연대도 함께했습니다. (WCCW joined the 1600th Wednesday Demonstration in front of the Japanese Embassy.)"})]})]})]}),f.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative",children:[f.jsx("button",{onClick:()=>t("워싱턴 포스트 기고문 게재",'WCCW 이사장이 워싱턴 포스트에 기고한 "역사를 잊지 말아야 하는 이유" 칼럼이 화제입니다.'),className:"absolute top-4 right-4 text-gray-400 hover:text-wccw-purple p-1 z-10","aria-label":"Share news",children:f.jsx(ns,{size:16})}),f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx("div",{className:"bg-yellow-100 p-2 rounded-lg text-yellow-700 shrink-0",children:f.jsx(jc,{size:20})}),f.jsxs("div",{className:"pr-6",children:[f.jsx("span",{className:"text-xs text-yellow-600 font-bold block mb-1",children:"언론 보도 (Press)"}),f.jsxs("h3",{className:"text-sm font-bold text-gray-800 mb-1",children:["워싱턴 포스트 기고문 게재",f.jsx("br",{}),f.jsx("span",{className:"text-xs text-gray-500 font-normal",children:"Op-ed in Washington Post"})]}),f.jsx("p",{className:"text-xs text-gray-500 line-clamp-2 mt-1",children:"WCCW 이사장이 워싱턴 포스트에 기고한 '역사를 잊지 말아야 하는 이유' 칼럼이 화제입니다. (The Chairman's op-ed 'Why We Must Not Forget History' is drawing attention.)"})]})]})]})]})]})]})},Eu=()=>f.jsxs("div",{className:"pb-24 px-6 pt-8 bg-gray-50 min-h-screen",children:[f.jsxs("div",{className:"mb-8 text-center",children:[f.jsx("h1",{className:"text-2xl font-serif font-bold text-gray-900 mb-1",children:"WCCW 소개"}),f.jsx("h2",{className:"text-sm font-serif text-gray-600 uppercase tracking-widest mb-4",children:"About WCCW"}),f.jsx("div",{className:"inline-block bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100",children:f.jsx("p",{className:"text-xs font-bold text-wccw-purple",children:"Washington DC Coalition for Comfort Women"})})]}),f.jsxs("div",{className:"space-y-6",children:[f.jsxs("div",{className:"bg-gradient-to-br from-wccw-purple to-purple-900 p-6 rounded-2xl shadow-lg text-white",children:[f.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[f.jsx("div",{className:"w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm",children:f.jsx(Oc,{size:20,className:"text-white"})}),f.jsx("h2",{className:"text-lg font-bold",children:"우리의 사명 (Mission)"})]}),f.jsx("p",{className:"text-sm leading-relaxed opacity-90 mb-4",children:"WCCW는 1992년 12월, 일본군 성노예 피해자들의 인권 회복과 진상 규명을 위해 워싱턴 DC에서 설립되었습니다. 우리는 역사를 잊지 않고, 다음 세대에게 인권과 평화의 소중함을 교육합니다."}),f.jsx("p",{className:"text-xs leading-relaxed opacity-70 italic border-t border-white/20 pt-3",children:"Established in Dec 1992, WCCW is dedicated to restoring human rights for 'Comfort Women' victims. We educate the next generation on the value of peace."})]}),f.jsxs("div",{className:"space-y-3",children:[f.jsx("h3",{className:"font-bold text-gray-800 text-sm pl-2 border-l-4 border-wccw-yellow",children:"주요 활동 (Key Activities)"}),f.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[f.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm border border-gray-100",children:[f.jsx(Mc,{className:"text-wccw-yellow mb-2",size:24}),f.jsx("h4",{className:"font-bold text-gray-800 text-sm mb-1",children:"결의안 121호"}),f.jsx("p",{className:"text-[10px] text-gray-500",children:"2007년 미 하원 위안부 결의안 통과 주도"})]}),f.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm border border-gray-100",children:[f.jsx(Lc,{className:"text-blue-500 mb-2",size:24}),f.jsx("h4",{className:"font-bold text-gray-800 text-sm mb-1",children:"인권 교육"}),f.jsx("p",{className:"text-[10px] text-gray-500",children:"미국 주류 사회 및 차세대 대상 역사 교육"})]}),f.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm border border-gray-100",children:[f.jsx(Fc,{className:"text-green-500 mb-2",size:24}),f.jsx("h4",{className:"font-bold text-gray-800 text-sm mb-1",children:"국제 연대"}),f.jsx("p",{className:"text-[10px] text-gray-500",children:"앰네스티 등 국제 인권 단체와 협력"})]}),f.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm border border-gray-100",children:[f.jsx(lo,{className:"text-red-500 mb-2",size:24}),f.jsx("h4",{className:"font-bold text-gray-800 text-sm mb-1",children:"기림비 건립"}),f.jsx("p",{className:"text-[10px] text-gray-500",children:"워싱턴 DC 및 버지니아 지역 기림비 관리"})]})]})]}),f.jsxs("div",{className:"bg-white p-6 rounded-2xl shadow-sm border border-gray-100",children:[f.jsxs("h2",{className:"text-base font-bold text-gray-800 mb-4 border-b border-gray-100 pb-2",children:["연락처 ",f.jsx("span",{className:"text-xs font-normal text-gray-500 ml-1",children:"Contact Us"})]}),f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:"flex items-center gap-3 text-sm text-gray-600 group",children:[f.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-50 group-hover:text-wccw-purple transition-colors",children:f.jsx(lo,{size:16})}),f.jsxs("div",{className:"flex flex-col",children:[f.jsx("span",{className:"text-xs text-gray-400",children:"Address"}),f.jsx("span",{children:"Annandale, VA, United States"})]})]}),f.jsxs("div",{className:"flex items-center gap-3 text-sm text-gray-600 group",children:[f.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-50 group-hover:text-wccw-purple transition-colors",children:f.jsx(Uc,{size:16})}),f.jsxs("div",{className:"flex flex-col",children:[f.jsx("span",{className:"text-xs text-gray-400",children:"Email"}),f.jsx("a",{href:"mailto:wccwcontact@gmail.com",className:"text-blue-600 hover:underline",children:"wccwcontact@gmail.com"})]})]}),f.jsxs("div",{className:"flex items-center gap-3 text-sm text-gray-600 group",children:[f.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-50 group-hover:text-wccw-purple transition-colors",children:f.jsx(Bc,{size:16})}),f.jsxs("div",{className:"flex flex-col",children:[f.jsx("span",{className:"text-xs text-gray-400",children:"Phone"}),f.jsx("a",{href:"tel:2026690666",className:"hover:text-wccw-purple",children:"202-669-0666"})]})]})]})]}),f.jsxs("div",{className:"mt-6 border-t border-gray-200 pt-6 text-center",children:[f.jsxs("a",{href:"https://wccw.org/privacy",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-xs text-gray-500 hover:text-wccw-purple mb-2",children:[f.jsx(qc,{size:12}),f.jsx("span",{children:"개인정보처리방침 (Privacy Policy)"})]}),f.jsxs("div",{className:"text-[10px] text-gray-400",children:["Version 1.0.0",f.jsx("br",{}),"© 2024 Washington DC Coalition for Comfort Women.",f.jsx("br",{}),"All rights reserved."]})]})]})]}),wu=async n=>{try{const t=new nu({apiKey:""});return console.log("Asking History Tutor:",n),(await t.models.generateContent({model:"gemini-3-flash-preview",contents:n,config:{systemInstruction:`당신은 'WCCW (Washington DC Coalition for Comfort Women)'의 역사 교육 AI 어시스턴트입니다. 
        일본군 '위안부' 역사에 대해 정확하고, 피해자 중심의 관점에서, 존중과 공감을 담아 설명해야 합니다.
        역사적 사실(1930년대~1945년, 김학순 할머니 증언, 미 하원 결의안 121호 등)에 기반하여 답변하세요.
        
        답변 형식:
        1. 먼저 한국어로 친절하게 답변하세요 (3~4문장 요약).
        2. 그 바로 아래에 동일한 내용의 영어 번역(English Translation)을 제공하세요.
        
        모바일 화면에서 읽기 편하게 문단 나누기를 해주세요.`,temperature:.7}})).text||`죄송합니다. 답변을 생성하는 데 문제가 발생했습니다.
Sorry, there was an issue generating the response.`}catch(t){return console.error("Gemini API Error:",t),`AI 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요.
(API Key 설정을 확인해주세요)`}},Tu=()=>{const[n,t]=st.useState(""),[e,r]=st.useState([{role:"model",text:`안녕하세요. 위안부 역사에 대해 궁금한 점이 있으신가요? 무엇이든 물어보세요.

Hello. Do you have any questions about the history of Comfort Women? Ask me anything.`}]),[i,o]=st.useState(!1),a=st.useRef(null),u=()=>{var m;(m=a.current)==null||m.scrollIntoView({behavior:"smooth"})};st.useEffect(()=>{u()},[e]);const h=async()=>{if(!n.trim()||i)return;const m=n.trim();t(""),r(x=>[...x,{role:"user",text:m}]),o(!0);const g=await wu(m);r(x=>[...x,{role:"model",text:g}]),o(!1)};return f.jsxs("div",{className:"bg-white rounded-xl shadow-md p-4 mt-6 border border-gray-100",children:[f.jsx("div",{className:"flex items-center justify-between mb-4 border-b pb-2",children:f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(zc,{className:"text-wccw-purple",size:20}),f.jsx("h3",{className:"font-bold text-gray-800",children:"역사 AI 도우미 (AI History Tutor)"})]})}),f.jsxs("div",{className:"h-64 overflow-y-auto mb-2 space-y-3 no-scrollbar bg-gray-50 p-3 rounded-lg",children:[e.map((m,g)=>f.jsx("div",{className:`flex ${m.role==="user"?"justify-end":"justify-start"}`,children:f.jsx("div",{className:`max-w-[85%] p-3 rounded-lg text-sm whitespace-pre-line ${m.role==="user"?"bg-wccw-purple text-white rounded-tr-none":"bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm"}`,children:m.text})},g)),i&&f.jsx("div",{className:"flex justify-start",children:f.jsx("div",{className:"bg-white border border-gray-200 p-3 rounded-lg rounded-tl-none shadow-sm",children:f.jsxs("div",{className:"flex space-x-1",children:[f.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce"}),f.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"}),f.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"})]})})}),f.jsx("div",{ref:a})]}),f.jsxs("div",{className:"flex items-start gap-1 mb-3 px-1",children:[f.jsx($c,{size:10,className:"text-gray-400 mt-0.5 shrink-0"}),f.jsxs("p",{className:"text-[10px] text-gray-400 leading-tight",children:["AI가 생성한 답변은 부정확할 수 있습니다. 중요 정보는 공식 자료를 확인해주세요.",f.jsx("br",{}),"AI-generated content may be inaccurate. Verify important info."]})]}),f.jsxs("div",{className:"flex gap-2",children:[f.jsx("input",{type:"text",value:n,onChange:m=>t(m.target.value),onKeyDown:m=>m.key==="Enter"&&h(),placeholder:"질문을 입력하세요 (Type a question)",className:"flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-wccw-purple focus:ring-1 focus:ring-wccw-purple"}),f.jsx("button",{onClick:h,disabled:i,className:"bg-wccw-purple text-white p-2 rounded-full hover:bg-purple-800 disabled:opacity-50",children:f.jsx(Wc,{size:18})})]})]})},Iu=()=>{const n=async(t,e)=>{const r=t.replace(/\n/g," ");if(navigator.share)try{await navigator.share({title:`WCCW History: ${r}`,text:e,url:window.location.href})}catch(i){console.log("Error sharing:",i)}else alert(`History Event:

${r}

${e}`)};return f.jsxs("div",{className:"pb-24 px-6 pt-8 bg-gray-50 min-h-screen",children:[f.jsxs("div",{className:"mb-6 border-b border-gray-200 pb-4",children:[f.jsx("h1",{className:"text-2xl font-serif font-bold text-gray-900 mb-2",children:"역사의 진실"}),f.jsx("h2",{className:"text-sm font-serif text-gray-600 mb-3 uppercase tracking-widest",children:"Truth of History"}),f.jsxs("p",{className:"text-sm text-gray-600 leading-relaxed",children:['"역사를 잊은 민족에게 미래는 없습니다."',f.jsx("br",{}),"올바른 역사를 기억하고 알리는 것이 정의의 시작입니다.",f.jsxs("span",{className:"block text-xs text-gray-500 mt-2 font-light italic",children:['"A nation that forgets its history has no future."',f.jsx("br",{}),"Remembering and spreading the correct history is the beginning of justice."]})]})]}),f.jsx(Tu,{}),f.jsxs("div",{className:"mt-10 mb-8",children:[f.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[f.jsx(Hc,{className:"text-wccw-purple",size:20}),f.jsxs("h2",{className:"text-lg font-bold text-gray-800",children:["할머니들의 목소리 ",f.jsx("span",{className:"text-sm font-normal text-gray-500 ml-1",children:"Voices of Victims"})]})]}),f.jsx("div",{className:"grid gap-4",children:gu.map((t,e)=>f.jsxs("div",{className:"bg-white p-5 rounded-xl border border-purple-100 shadow-sm relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-wccw-purple"}),f.jsxs("p",{className:"font-serif text-gray-800 italic mb-2 text-sm leading-relaxed",children:['"',t.content,'"']}),f.jsxs("p",{className:"font-serif text-gray-500 italic text-xs mb-3 leading-relaxed",children:['"',t.contentEn,'"']}),f.jsxs("p",{className:"text-right text-xs font-bold text-wccw-purple flex items-center justify-end gap-1",children:[f.jsx("span",{className:"w-4 h-[1px] bg-wccw-purple/50"}),t.speaker]})]},e))})]}),f.jsxs("div",{className:"mt-10 mb-6 flex items-center gap-2",children:[f.jsx(Kc,{className:"text-wccw-purple",size:20}),f.jsxs("h2",{className:"text-lg font-bold text-gray-800",children:["주요 연혁 ",f.jsx("span",{className:"text-sm font-normal text-gray-500 ml-1",children:"Key Timeline"})]})]}),f.jsx("div",{className:"relative pl-6 space-y-10 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-wccw-purple/20 before:to-transparent",children:_u.map((t,e)=>f.jsxs("div",{className:"relative animate-fade-in",style:{animationDelay:`${e*100}ms`},children:[f.jsx("div",{className:"absolute -left-[27px] top-1.5 h-6 w-6 rounded-full border-4 border-gray-50 bg-wccw-purple shadow-sm z-10 flex items-center justify-center",children:f.jsx("div",{className:"w-1.5 h-1.5 bg-white rounded-full"})}),f.jsxs("div",{className:"bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 relative group",children:[f.jsx("button",{onClick:()=>n(t.title,t.description),className:"absolute top-4 right-4 text-gray-300 hover:text-wccw-purple p-1 rounded-full transition-colors opacity-0 group-hover:opacity-100","aria-label":"Share event",children:f.jsx(ns,{size:16})}),f.jsx("div",{className:"inline-block px-3 py-1 rounded-full bg-wccw-purple/10 text-wccw-purple text-xs font-bold mb-3",children:t.year}),f.jsx("h3",{className:"font-bold text-gray-800 mb-2 whitespace-pre-line leading-tight text-lg",children:t.title}),f.jsx("p",{className:"text-sm text-gray-600 leading-relaxed whitespace-pre-line",children:t.description})]})]},e))}),f.jsx("div",{className:"mt-12 text-center",children:f.jsxs("p",{className:"text-xs text-gray-400",children:["* 이 타임라인은 주요 사건을 요약한 것입니다.",f.jsx("br",{}),"더 자세한 내용은 AI 도우미에게 물어보세요."]})})]})},xu=()=>f.jsxs("div",{className:"pb-24 px-6 pt-8 bg-gray-50 min-h-screen",children:[f.jsxs("div",{className:"mb-8 text-center",children:[f.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-wccw-yellow/20 text-yellow-600 rounded-full mb-4",children:f.jsx(da,{size:32,fill:"currentColor"})}),f.jsx("h1",{className:"text-2xl font-serif font-bold text-gray-900 mb-1",children:"후원 안내"}),f.jsx("h2",{className:"text-lg font-serif text-gray-600 mb-2",children:"Donation Guide"}),f.jsxs("p",{className:"text-sm text-gray-500",children:["할머님들의 명예 회복을 위한 여정에 함께해주세요.",f.jsx("br",{}),f.jsx("span",{className:"text-xs",children:"Join us in the journey to restore the honor of the grandmothers."})]})]}),f.jsxs("div",{className:"bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6",children:[f.jsxs("h2",{className:"text-sm font-bold text-gray-600 mb-1 flex items-center gap-2",children:[f.jsx("div",{className:"w-2 h-2 rounded-full bg-wccw-purple"}),"2025년 월별 후원 현황"]}),f.jsx("p",{className:"text-xs text-gray-400 mb-4 ml-4",children:"Monthly Donation Status 2025"}),f.jsx("div",{className:"h-48 w-full",children:f.jsx(ru,{width:"100%",height:"100%",children:f.jsxs(su,{data:yu,children:[f.jsx(iu,{dataKey:"name",fontSize:10,tickLine:!1,axisLine:!1,interval:0}),f.jsx(ou,{hide:!0}),f.jsx(au,{cursor:{fill:"#f3f4f6"},contentStyle:{borderRadius:"8px",border:"none",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"}}),f.jsx(lu,{dataKey:"amount",fill:"#6B21A8",radius:[4,4,0,0]})]})})}),f.jsx("p",{className:"text-center text-xs text-gray-400 mt-2",children:"* 단위 (Unit): USD"})]}),f.jsxs("div",{className:"space-y-4",children:[f.jsxs("h2",{className:"text-lg font-bold text-gray-800",children:["후원 방법 ",f.jsx("span",{className:"text-sm font-normal text-gray-500 ml-1",children:"How to Donate"})]}),f.jsxs("button",{className:"w-full bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4 hover:border-wccw-purple transition-colors group",children:[f.jsx("div",{className:"w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0",children:f.jsx(Gc,{size:20})}),f.jsxs("div",{className:"text-left",children:[f.jsx("div",{className:"font-bold text-gray-800 group-hover:text-wccw-purple text-sm",children:"신용카드 / PayPal (Credit Card)"}),f.jsxs("div",{className:"text-xs text-gray-500",children:["간편하게 일시/정기 후원하기",f.jsx("br",{}),"Simple one-time/recurring donation"]})]})]}),f.jsxs("button",{className:"w-full bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4 hover:border-wccw-purple transition-colors group",children:[f.jsx("div",{className:"w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0",children:f.jsx(Qc,{size:20})}),f.jsxs("div",{className:"text-left",children:[f.jsx("div",{className:"font-bold text-gray-800 group-hover:text-wccw-purple text-sm",children:"은행 송금 (Check / Bank Transfer)"}),f.jsxs("div",{className:"text-xs text-gray-500",children:["우편 발송 및 계좌 이체",f.jsx("br",{}),"Mail check or bank transfer"]})]})]})]}),f.jsxs("div",{className:"mt-8 bg-wccw-dark text-white p-6 rounded-2xl",children:[f.jsx("h3",{className:"font-bold text-lg mb-1",children:"후원금은 이렇게 쓰입니다"}),f.jsx("h4",{className:"text-xs text-gray-400 mb-3",children:"How Donations Are Used"}),f.jsxs("ul",{className:"space-y-3 text-sm text-gray-300 list-disc pl-4",children:[f.jsxs("li",{children:["미국 내 위안부 역사 교육 자료 제작",f.jsx("span",{className:"block text-xs text-gray-500 mt-1",children:"Production of history education materials in the US"})]}),f.jsxs("li",{children:["기림비 유지 보수 및 관리",f.jsx("span",{className:"block text-xs text-gray-500 mt-1",children:"Maintenance of memorials"})]}),f.jsxs("li",{children:["피해자 할머니 지원 사업",f.jsx("span",{className:"block text-xs text-gray-500 mt-1",children:"Support for victim grandmothers"})]}),f.jsxs("li",{children:["차세대 인권 리더 양성 프로그램",f.jsx("span",{className:"block text-xs text-gray-500 mt-1",children:"Next-generation human rights leader training"})]})]})]})]});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Au=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],u=n[e++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ga={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,u=a?n[i+1]:0,h=i+2<n.length,m=h?n[i+2]:0,g=o>>2,x=(o&3)<<4|u>>4;let b=(u&15)<<2|m>>6,C=m&63;h||(C=64,a||(b=64)),r.push(e[g],e[x],e[b],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(pa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Au(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],u=i<n.length?e[n.charAt(i)]:0;++i;const m=i<n.length?e[n.charAt(i)]:64;++i;const x=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||u==null||m==null||x==null)throw new bu;const b=o<<2|u>>4;if(r.push(b),m!==64){const C=u<<4&240|m>>2;if(r.push(C),x!==64){const V=m<<6&192|x;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ru=function(n){const t=pa(n);return ga.encodeByteArray(t,!0)},Zn=function(n){return Ru(n).replace(/\./g,"")},Cu=function(n){try{return ga.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=()=>Pu().__FIREBASE_DEFAULTS__,Nu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Cu(n[1]);return t&&JSON.parse(t)},As=()=>{try{return Su()||Nu()||Vu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Du=n=>{var t,e;return(e=(t=As())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},ku=n=>{const t=Du(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},_a=()=>{var n;return(n=As())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n),u="";return[Zn(JSON.stringify(e)),Zn(JSON.stringify(a)),u].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lu(){var n;const t=(n=As())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fu(){return!Lu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Uu(){try{return typeof indexedDB=="object"}catch{return!1}}function Bu(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="FirebaseError";class Se extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=qu,Object.setPrototypeOf(this,Se.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ya.prototype.create)}}class ya{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?zu(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new Se(i,u,r)}}function zu(n,t){return n.replace($u,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const $u=/\{\$([^}]+)}/g;function ss(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(mo(o)&&mo(a)){if(!ss(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function mo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(n){return n&&n._delegate?n._delegate:n}class cn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new ju;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ku(t))try{this.getOrInitializeService({instanceIdentifier:ne})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ne){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ne){return this.instances.has(t)}getOptions(t=ne){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hu(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ne){return this.component?this.component.multipleInstances?t:ne:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hu(n){return n===ne?void 0:n}function Ku(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Wu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const Qu={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Yu=$.INFO,Xu={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Ju=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Xu[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class va{constructor(t){this.name=t,this._logLevel=Yu,this._logHandler=Ju,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Qu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const Zu=(n,t)=>t.some(e=>n instanceof e);let po,go;function th(){return po||(po=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eh(){return go||(go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ea=new WeakMap,is=new WeakMap,wa=new WeakMap,Kr=new WeakMap,bs=new WeakMap;function nh(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Wt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Ea.set(e,n)}).catch(()=>{}),bs.set(t,n),t}function rh(n){if(is.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});is.set(n,t)}let os={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return is.get(n);if(t==="objectStoreNames")return n.objectStoreNames||wa.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Wt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function sh(n){os=n(os)}function ih(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Gr(this),t,...e);return wa.set(r,t.sort?t.sort():[t]),Wt(r)}:eh().includes(n)?function(...t){return n.apply(Gr(this),t),Wt(Ea.get(this))}:function(...t){return Wt(n.apply(Gr(this),t))}}function oh(n){return typeof n=="function"?ih(n):(n instanceof IDBTransaction&&rh(n),Zu(n,th())?new Proxy(n,os):n)}function Wt(n){if(n instanceof IDBRequest)return nh(n);if(Kr.has(n))return Kr.get(n);const t=oh(n);return t!==n&&(Kr.set(n,t),bs.set(t,n)),t}const Gr=n=>bs.get(n);function ah(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),u=Wt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Wt(a.result),h.oldVersion,h.newVersion,Wt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",m=>i(m.oldVersion,m.newVersion,m))}).catch(()=>{}),u}const lh=["get","getKey","getAll","getAllKeys","count"],ch=["put","add","delete","clear"],Qr=new Map;function _o(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Qr.get(t))return Qr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=ch.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lh.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,i?"readwrite":"readonly");let m=h.store;return r&&(m=m.index(u.shift())),(await Promise.all([m[e](...u),i&&h.done]))[0]};return Qr.set(t,o),o}sh(n=>({...n,get:(t,e,r)=>_o(t,e)||n.get(t,e,r),has:(t,e)=>!!_o(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(hh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function hh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const as="@firebase/app",yo="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new va("@firebase/app"),dh="@firebase/app-compat",fh="@firebase/analytics-compat",mh="@firebase/analytics",ph="@firebase/app-check-compat",gh="@firebase/app-check",_h="@firebase/auth",yh="@firebase/auth-compat",vh="@firebase/database",Eh="@firebase/data-connect",wh="@firebase/database-compat",Th="@firebase/functions",Ih="@firebase/functions-compat",xh="@firebase/installations",Ah="@firebase/installations-compat",bh="@firebase/messaging",Rh="@firebase/messaging-compat",Ch="@firebase/performance",Ph="@firebase/performance-compat",Sh="@firebase/remote-config",Nh="@firebase/remote-config-compat",Vh="@firebase/storage",Dh="@firebase/storage-compat",kh="@firebase/firestore",jh="@firebase/vertexai-preview",Oh="@firebase/firestore-compat",Mh="firebase",Lh="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="[DEFAULT]",Fh={[as]:"fire-core",[dh]:"fire-core-compat",[mh]:"fire-analytics",[fh]:"fire-analytics-compat",[gh]:"fire-app-check",[ph]:"fire-app-check-compat",[_h]:"fire-auth",[yh]:"fire-auth-compat",[vh]:"fire-rtdb",[Eh]:"fire-data-connect",[wh]:"fire-rtdb-compat",[Th]:"fire-fn",[Ih]:"fire-fn-compat",[xh]:"fire-iid",[Ah]:"fire-iid-compat",[bh]:"fire-fcm",[Rh]:"fire-fcm-compat",[Ch]:"fire-perf",[Ph]:"fire-perf-compat",[Sh]:"fire-rc",[Nh]:"fire-rc-compat",[Vh]:"fire-gcs",[Dh]:"fire-gcs-compat",[kh]:"fire-fst",[Oh]:"fire-fst-compat",[jh]:"fire-vertex","fire-js":"fire-js",[Mh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Map,Uh=new Map,cs=new Map;function vo(n,t){try{n.container.addComponent(t)}catch(e){Mt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function er(n){const t=n.name;if(cs.has(t))return Mt.debug(`There were multiple attempts to register component ${t}.`),!1;cs.set(t,n);for(const e of tr.values())vo(e,n);for(const e of Uh.values())vo(e,n);return!0}function Bh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new ya("app","Firebase",qh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=Lh;function Ta(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ls,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ht.create("bad-app-name",{appName:String(i)});if(e||(e=_a()),!e)throw Ht.create("no-options");const o=tr.get(i);if(o){if(ss(e,o.options)&&ss(r,o.config))return o;throw Ht.create("duplicate-app",{appName:i})}const a=new Gu(i);for(const h of cs.values())a.addComponent(h);const u=new zh(e,r,a);return tr.set(i,u),u}function Wh(n=ls){const t=tr.get(n);if(!t&&n===ls&&_a())return Ta();if(!t)throw Ht.create("no-app",{appName:n});return t}function Ee(n,t,e){var r;let i=(r=Fh[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${i}" with version "${t}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Mt.warn(u.join(" "));return}er(new cn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="firebase-heartbeat-database",Kh=1,un="firebase-heartbeat-store";let Yr=null;function Ia(){return Yr||(Yr=ah(Hh,Kh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(un)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ht.create("idb-open",{originalErrorMessage:n.message})})),Yr}async function Gh(n){try{const e=(await Ia()).transaction(un),r=await e.objectStore(un).get(xa(n));return await e.done,r}catch(t){if(t instanceof Se)Mt.warn(t.message);else{const e=Ht.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Mt.warn(e.message)}}}async function Eo(n,t){try{const r=(await Ia()).transaction(un,"readwrite");await r.objectStore(un).put(t,xa(n)),await r.done}catch(e){if(e instanceof Se)Mt.warn(e.message);else{const r=Ht.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Mt.warn(r.message)}}}function xa(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh=1024,Yh=30*24*60*60*1e3;class Xh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Zh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=wo();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=Yh}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Mt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=wo(),{heartbeatsToSend:r,unsentEntries:i}=Jh(this._heartbeatsCache.heartbeats),o=Zn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Mt.warn(e),""}}}function wo(){return new Date().toISOString().substring(0,10)}function Jh(n,t=Qh){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),To(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),To(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Zh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uu()?Bu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Gh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function To(n){return Zn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(n){er(new cn("platform-logger",t=>new uh(t),"PRIVATE")),er(new cn("heartbeat",t=>new Xh(t),"PRIVATE")),Ee(as,yo,n),Ee(as,yo,"esm2017"),Ee("fire-js","")}td("");var ed="firebase",nd="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee(ed,nd,"app");var Io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var se,Aa;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function y(){}y.prototype=p.prototype,T.D=p.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(v,w,E){for(var _=Array(arguments.length-2),It=2;It<arguments.length;It++)_[It-2]=arguments[It];return p.prototype[w].apply(v,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,p,y){y||(y=0);var v=Array(16);if(typeof p=="string")for(var w=0;16>w;++w)v[w]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(w=0;16>w;++w)v[w]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=T.g[0],y=T.g[1],w=T.g[2];var E=T.g[3],_=p+(E^y&(w^E))+v[0]+3614090360&4294967295;p=y+(_<<7&4294967295|_>>>25),_=E+(w^p&(y^w))+v[1]+3905402710&4294967295,E=p+(_<<12&4294967295|_>>>20),_=w+(y^E&(p^y))+v[2]+606105819&4294967295,w=E+(_<<17&4294967295|_>>>15),_=y+(p^w&(E^p))+v[3]+3250441966&4294967295,y=w+(_<<22&4294967295|_>>>10),_=p+(E^y&(w^E))+v[4]+4118548399&4294967295,p=y+(_<<7&4294967295|_>>>25),_=E+(w^p&(y^w))+v[5]+1200080426&4294967295,E=p+(_<<12&4294967295|_>>>20),_=w+(y^E&(p^y))+v[6]+2821735955&4294967295,w=E+(_<<17&4294967295|_>>>15),_=y+(p^w&(E^p))+v[7]+4249261313&4294967295,y=w+(_<<22&4294967295|_>>>10),_=p+(E^y&(w^E))+v[8]+1770035416&4294967295,p=y+(_<<7&4294967295|_>>>25),_=E+(w^p&(y^w))+v[9]+2336552879&4294967295,E=p+(_<<12&4294967295|_>>>20),_=w+(y^E&(p^y))+v[10]+4294925233&4294967295,w=E+(_<<17&4294967295|_>>>15),_=y+(p^w&(E^p))+v[11]+2304563134&4294967295,y=w+(_<<22&4294967295|_>>>10),_=p+(E^y&(w^E))+v[12]+1804603682&4294967295,p=y+(_<<7&4294967295|_>>>25),_=E+(w^p&(y^w))+v[13]+4254626195&4294967295,E=p+(_<<12&4294967295|_>>>20),_=w+(y^E&(p^y))+v[14]+2792965006&4294967295,w=E+(_<<17&4294967295|_>>>15),_=y+(p^w&(E^p))+v[15]+1236535329&4294967295,y=w+(_<<22&4294967295|_>>>10),_=p+(w^E&(y^w))+v[1]+4129170786&4294967295,p=y+(_<<5&4294967295|_>>>27),_=E+(y^w&(p^y))+v[6]+3225465664&4294967295,E=p+(_<<9&4294967295|_>>>23),_=w+(p^y&(E^p))+v[11]+643717713&4294967295,w=E+(_<<14&4294967295|_>>>18),_=y+(E^p&(w^E))+v[0]+3921069994&4294967295,y=w+(_<<20&4294967295|_>>>12),_=p+(w^E&(y^w))+v[5]+3593408605&4294967295,p=y+(_<<5&4294967295|_>>>27),_=E+(y^w&(p^y))+v[10]+38016083&4294967295,E=p+(_<<9&4294967295|_>>>23),_=w+(p^y&(E^p))+v[15]+3634488961&4294967295,w=E+(_<<14&4294967295|_>>>18),_=y+(E^p&(w^E))+v[4]+3889429448&4294967295,y=w+(_<<20&4294967295|_>>>12),_=p+(w^E&(y^w))+v[9]+568446438&4294967295,p=y+(_<<5&4294967295|_>>>27),_=E+(y^w&(p^y))+v[14]+3275163606&4294967295,E=p+(_<<9&4294967295|_>>>23),_=w+(p^y&(E^p))+v[3]+4107603335&4294967295,w=E+(_<<14&4294967295|_>>>18),_=y+(E^p&(w^E))+v[8]+1163531501&4294967295,y=w+(_<<20&4294967295|_>>>12),_=p+(w^E&(y^w))+v[13]+2850285829&4294967295,p=y+(_<<5&4294967295|_>>>27),_=E+(y^w&(p^y))+v[2]+4243563512&4294967295,E=p+(_<<9&4294967295|_>>>23),_=w+(p^y&(E^p))+v[7]+1735328473&4294967295,w=E+(_<<14&4294967295|_>>>18),_=y+(E^p&(w^E))+v[12]+2368359562&4294967295,y=w+(_<<20&4294967295|_>>>12),_=p+(y^w^E)+v[5]+4294588738&4294967295,p=y+(_<<4&4294967295|_>>>28),_=E+(p^y^w)+v[8]+2272392833&4294967295,E=p+(_<<11&4294967295|_>>>21),_=w+(E^p^y)+v[11]+1839030562&4294967295,w=E+(_<<16&4294967295|_>>>16),_=y+(w^E^p)+v[14]+4259657740&4294967295,y=w+(_<<23&4294967295|_>>>9),_=p+(y^w^E)+v[1]+2763975236&4294967295,p=y+(_<<4&4294967295|_>>>28),_=E+(p^y^w)+v[4]+1272893353&4294967295,E=p+(_<<11&4294967295|_>>>21),_=w+(E^p^y)+v[7]+4139469664&4294967295,w=E+(_<<16&4294967295|_>>>16),_=y+(w^E^p)+v[10]+3200236656&4294967295,y=w+(_<<23&4294967295|_>>>9),_=p+(y^w^E)+v[13]+681279174&4294967295,p=y+(_<<4&4294967295|_>>>28),_=E+(p^y^w)+v[0]+3936430074&4294967295,E=p+(_<<11&4294967295|_>>>21),_=w+(E^p^y)+v[3]+3572445317&4294967295,w=E+(_<<16&4294967295|_>>>16),_=y+(w^E^p)+v[6]+76029189&4294967295,y=w+(_<<23&4294967295|_>>>9),_=p+(y^w^E)+v[9]+3654602809&4294967295,p=y+(_<<4&4294967295|_>>>28),_=E+(p^y^w)+v[12]+3873151461&4294967295,E=p+(_<<11&4294967295|_>>>21),_=w+(E^p^y)+v[15]+530742520&4294967295,w=E+(_<<16&4294967295|_>>>16),_=y+(w^E^p)+v[2]+3299628645&4294967295,y=w+(_<<23&4294967295|_>>>9),_=p+(w^(y|~E))+v[0]+4096336452&4294967295,p=y+(_<<6&4294967295|_>>>26),_=E+(y^(p|~w))+v[7]+1126891415&4294967295,E=p+(_<<10&4294967295|_>>>22),_=w+(p^(E|~y))+v[14]+2878612391&4294967295,w=E+(_<<15&4294967295|_>>>17),_=y+(E^(w|~p))+v[5]+4237533241&4294967295,y=w+(_<<21&4294967295|_>>>11),_=p+(w^(y|~E))+v[12]+1700485571&4294967295,p=y+(_<<6&4294967295|_>>>26),_=E+(y^(p|~w))+v[3]+2399980690&4294967295,E=p+(_<<10&4294967295|_>>>22),_=w+(p^(E|~y))+v[10]+4293915773&4294967295,w=E+(_<<15&4294967295|_>>>17),_=y+(E^(w|~p))+v[1]+2240044497&4294967295,y=w+(_<<21&4294967295|_>>>11),_=p+(w^(y|~E))+v[8]+1873313359&4294967295,p=y+(_<<6&4294967295|_>>>26),_=E+(y^(p|~w))+v[15]+4264355552&4294967295,E=p+(_<<10&4294967295|_>>>22),_=w+(p^(E|~y))+v[6]+2734768916&4294967295,w=E+(_<<15&4294967295|_>>>17),_=y+(E^(w|~p))+v[13]+1309151649&4294967295,y=w+(_<<21&4294967295|_>>>11),_=p+(w^(y|~E))+v[4]+4149444226&4294967295,p=y+(_<<6&4294967295|_>>>26),_=E+(y^(p|~w))+v[11]+3174756917&4294967295,E=p+(_<<10&4294967295|_>>>22),_=w+(p^(E|~y))+v[2]+718787259&4294967295,w=E+(_<<15&4294967295|_>>>17),_=y+(E^(w|~p))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(w+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+E&4294967295}r.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var y=p-this.blockSize,v=this.B,w=this.h,E=0;E<p;){if(w==0)for(;E<=y;)i(this,T,E),E+=this.blockSize;if(typeof T=="string"){for(;E<p;)if(v[w++]=T.charCodeAt(E++),w==this.blockSize){i(this,v),w=0;break}}else for(;E<p;)if(v[w++]=T[E++],w==this.blockSize){i(this,v),w=0;break}}this.h=w,this.o+=p},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var y=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=y&255,y/=256;for(this.u(T),T=Array(16),p=y=0;4>p;++p)for(var v=0;32>v;v+=8)T[y++]=this.g[p]>>>v&255;return T};function o(T,p){var y=u;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=p(T)}function a(T,p){this.h=p;for(var y=[],v=!0,w=T.length-1;0<=w;w--){var E=T[w]|0;v&&E==p||(y[w]=E,v=!1)}this.g=y}var u={};function h(T){return-128<=T&&128>T?o(T,function(p){return new a([p|0],0>p?-1:0)}):new a([T|0],0>T?-1:0)}function m(T){if(isNaN(T)||!isFinite(T))return x;if(0>T)return N(m(-T));for(var p=[],y=1,v=0;T>=y;v++)p[v]=T/y|0,y*=4294967296;return new a(p,0)}function g(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return N(g(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=m(Math.pow(p,8)),v=x,w=0;w<T.length;w+=8){var E=Math.min(8,T.length-w),_=parseInt(T.substring(w,w+E),p);8>E?(E=m(Math.pow(p,E)),v=v.j(E).add(m(_))):(v=v.j(y),v=v.add(m(_)))}return v}var x=h(0),b=h(1),C=h(16777216);n=a.prototype,n.m=function(){if(j(this))return-N(this).m();for(var T=0,p=1,y=0;y<this.g.length;y++){var v=this.i(y);T+=(0<=v?v:4294967296+v)*p,p*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(V(this))return"0";if(j(this))return"-"+N(this).toString(T);for(var p=m(Math.pow(T,6)),y=this,v="";;){var w=tt(y,p).g;y=B(y,w.j(p));var E=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=w,V(y))return E+v;for(;6>E.length;)E="0"+E;v=E+v}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function V(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function j(T){return T.h==-1}n.l=function(T){return T=B(this,T),j(T)?-1:V(T)?0:1};function N(T){for(var p=T.g.length,y=[],v=0;v<p;v++)y[v]=~T.g[v];return new a(y,~T.h).add(b)}n.abs=function(){return j(this)?N(this):this},n.add=function(T){for(var p=Math.max(this.g.length,T.g.length),y=[],v=0,w=0;w<=p;w++){var E=v+(this.i(w)&65535)+(T.i(w)&65535),_=(E>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);v=_>>>16,E&=65535,_&=65535,y[w]=_<<16|E}return new a(y,y[y.length-1]&-2147483648?-1:0)};function B(T,p){return T.add(N(p))}n.j=function(T){if(V(this)||V(T))return x;if(j(this))return j(T)?N(this).j(N(T)):N(N(this).j(T));if(j(T))return N(this.j(N(T)));if(0>this.l(C)&&0>T.l(C))return m(this.m()*T.m());for(var p=this.g.length+T.g.length,y=[],v=0;v<2*p;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var w=0;w<T.g.length;w++){var E=this.i(v)>>>16,_=this.i(v)&65535,It=T.i(w)>>>16,Xt=T.i(w)&65535;y[2*v+2*w]+=_*Xt,z(y,2*v+2*w),y[2*v+2*w+1]+=E*Xt,z(y,2*v+2*w+1),y[2*v+2*w+1]+=_*It,z(y,2*v+2*w+1),y[2*v+2*w+2]+=E*It,z(y,2*v+2*w+2)}for(v=0;v<p;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=p;v<2*p;v++)y[v]=0;return new a(y,0)};function z(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function K(T,p){this.g=T,this.h=p}function tt(T,p){if(V(p))throw Error("division by zero");if(V(T))return new K(x,x);if(j(T))return p=tt(N(T),p),new K(N(p.g),N(p.h));if(j(p))return p=tt(T,N(p)),new K(N(p.g),p.h);if(30<T.g.length){if(j(T)||j(p))throw Error("slowDivide_ only works with positive integers.");for(var y=b,v=p;0>=v.l(T);)y=Tt(y),v=Tt(v);var w=nt(y,1),E=nt(v,1);for(v=nt(v,2),y=nt(y,2);!V(v);){var _=E.add(v);0>=_.l(T)&&(w=w.add(y),E=_),v=nt(v,1),y=nt(y,1)}return p=B(T,w.j(p)),new K(w,p)}for(w=x;0<=T.l(p);){for(y=Math.max(1,Math.floor(T.m()/p.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),E=m(y),_=E.j(p);j(_)||0<_.l(T);)y-=v,E=m(y),_=E.j(p);V(E)&&(E=b),w=w.add(E),T=B(T,_)}return new K(w,T)}n.A=function(T){return tt(this,T).h},n.and=function(T){for(var p=Math.max(this.g.length,T.g.length),y=[],v=0;v<p;v++)y[v]=this.i(v)&T.i(v);return new a(y,this.h&T.h)},n.or=function(T){for(var p=Math.max(this.g.length,T.g.length),y=[],v=0;v<p;v++)y[v]=this.i(v)|T.i(v);return new a(y,this.h|T.h)},n.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),y=[],v=0;v<p;v++)y[v]=this.i(v)^T.i(v);return new a(y,this.h^T.h)};function Tt(T){for(var p=T.g.length+1,y=[],v=0;v<p;v++)y[v]=T.i(v)<<1|T.i(v-1)>>>31;return new a(y,T.h)}function nt(T,p){var y=p>>5;p%=32;for(var v=T.g.length-y,w=[],E=0;E<v;E++)w[E]=0<p?T.i(E+y)>>>p|T.i(E+y+1)<<32-p:T.i(E+y);return new a(w,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Aa=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=m,a.fromString=g,se=a}).apply(typeof Io<"u"?Io:typeof self<"u"?self:typeof window<"u"?window:{});var $n=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ba,tn,Ra,Gn,us,Ca,Pa,Sa;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,c){return s==Array.prototype||s==Object.prototype||(s[l]=c.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof $n=="object"&&$n];for(var l=0;l<s.length;++l){var c=s[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,l){if(l)t:{var c=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var I=s[d];if(!(I in c))break t;c=c[I]}s=s[s.length-1],d=c[s],l=l(d),l!=d&&l!=null&&t(c,s,{configurable:!0,writable:!0,value:l})}}function o(s,l){s instanceof String&&(s+="");var c=0,d=!1,I={next:function(){if(!d&&c<s.length){var A=c++;return{value:l(A,s[A]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(s){var l=typeof s;return l=l!="object"?l:s?Array.isArray(s)?"array":l:"null",l=="array"||l=="object"&&typeof s.length=="number"}function m(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function g(s,l,c){return s.call.apply(s.bind,arguments)}function x(s,l,c){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),s.apply(l,I)}}return function(){return s.apply(l,arguments)}}function b(s,l,c){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:x,b.apply(null,arguments)}function C(s,l){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function V(s,l){function c(){}c.prototype=l.prototype,s.aa=l.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(d,I,A){for(var S=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)S[Q-2]=arguments[Q];return l.prototype[I].apply(d,S)}}function j(s){const l=s.length;if(0<l){const c=Array(l);for(let d=0;d<l;d++)c[d]=s[d];return c}return[]}function N(s,l){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const I=s.length||0,A=d.length||0;s.length=I+A;for(let S=0;S<A;S++)s[I+S]=d[S]}else s.push(d)}}class B{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function z(s){return/^[\s\xa0]*$/.test(s)}function K(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function tt(s){return tt[" "](s),s}tt[" "]=function(){};var Tt=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function nt(s,l,c){for(const d in s)l.call(c,s[d],d,s)}function T(s,l){for(const c in s)l.call(void 0,s[c],c,s)}function p(s){const l={};for(const c in s)l[c]=s[c];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(s,l){let c,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(c in d)s[c]=d[c];for(let A=0;A<y.length;A++)c=y[A],Object.prototype.hasOwnProperty.call(d,c)&&(s[c]=d[c])}}function w(s){var l=1;s=s.split(":");const c=[];for(;0<l&&s.length;)c.push(s.shift()),l--;return s.length&&c.push(s.join(":")),c}function E(s){u.setTimeout(()=>{throw s},0)}function _(){var s=Tr;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class It{constructor(){this.h=this.g=null}add(l,c){const d=Xt.get();d.set(l,c),this.h?this.h.next=d:this.g=d,this.h=d}}var Xt=new B(()=>new An,s=>s.reset());class An{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Oe,Me=!1,Tr=new It,ai=()=>{const s=u.Promise.resolve(void 0);Oe=()=>{s.then(Gl)}};var Gl=()=>{for(var s;s=_();){try{s.h.call(s.g)}catch(c){E(c)}var l=Xt;l.j(s),100>l.h&&(l.h++,s.next=l.g,l.g=s)}Me=!1};function Ut(){this.s=this.s,this.C=this.C}Ut.prototype.s=!1,Ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ft(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var Ql=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return s}();function Le(s,l){if(ft.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget){if(Tt){t:{try{tt(l.nodeName);var I=!0;break t}catch{}I=!1}I||(l=null)}}else c=="mouseover"?l=s.fromElement:c=="mouseout"&&(l=s.toElement);this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Yl[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Le.aa.h.call(this)}}V(Le,ft);var Yl={2:"touch",3:"pen",4:"mouse"};Le.prototype.h=function(){Le.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Fe="closure_listenable_"+(1e6*Math.random()|0),Xl=0;function Jl(s,l,c,d,I){this.listener=s,this.proxy=null,this.src=l,this.type=c,this.capture=!!d,this.ha=I,this.key=++Xl,this.da=this.fa=!1}function bn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Rn(s){this.src=s,this.g={},this.h=0}Rn.prototype.add=function(s,l,c,d,I){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var S=xr(s,l,d,I);return-1<S?(l=s[S],c||(l.fa=!1)):(l=new Jl(l,this.src,A,!!d,I),l.fa=c,s.push(l)),l};function Ir(s,l){var c=l.type;if(c in s.g){var d=s.g[c],I=Array.prototype.indexOf.call(d,l,void 0),A;(A=0<=I)&&Array.prototype.splice.call(d,I,1),A&&(bn(l),s.g[c].length==0&&(delete s.g[c],s.h--))}}function xr(s,l,c,d){for(var I=0;I<s.length;++I){var A=s[I];if(!A.da&&A.listener==l&&A.capture==!!c&&A.ha==d)return I}return-1}var Ar="closure_lm_"+(1e6*Math.random()|0),br={};function li(s,l,c,d,I){if(d&&d.once)return ui(s,l,c,d,I);if(Array.isArray(l)){for(var A=0;A<l.length;A++)li(s,l[A],c,d,I);return null}return c=Sr(c),s&&s[Fe]?s.K(l,c,m(d)?!!d.capture:!!d,I):ci(s,l,c,!1,d,I)}function ci(s,l,c,d,I,A){if(!l)throw Error("Invalid event type");var S=m(I)?!!I.capture:!!I,Q=Cr(s);if(Q||(s[Ar]=Q=new Rn(s)),c=Q.add(l,c,d,S,A),c.proxy)return c;if(d=Zl(),c.proxy=d,d.src=s,d.listener=c,s.addEventListener)Ql||(I=S),I===void 0&&(I=!1),s.addEventListener(l.toString(),d,I);else if(s.attachEvent)s.attachEvent(di(l.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Zl(){function s(c){return l.call(s.src,s.listener,c)}const l=tc;return s}function ui(s,l,c,d,I){if(Array.isArray(l)){for(var A=0;A<l.length;A++)ui(s,l[A],c,d,I);return null}return c=Sr(c),s&&s[Fe]?s.L(l,c,m(d)?!!d.capture:!!d,I):ci(s,l,c,!0,d,I)}function hi(s,l,c,d,I){if(Array.isArray(l))for(var A=0;A<l.length;A++)hi(s,l[A],c,d,I);else d=m(d)?!!d.capture:!!d,c=Sr(c),s&&s[Fe]?(s=s.i,l=String(l).toString(),l in s.g&&(A=s.g[l],c=xr(A,c,d,I),-1<c&&(bn(A[c]),Array.prototype.splice.call(A,c,1),A.length==0&&(delete s.g[l],s.h--)))):s&&(s=Cr(s))&&(l=s.g[l.toString()],s=-1,l&&(s=xr(l,c,d,I)),(c=-1<s?l[s]:null)&&Rr(c))}function Rr(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[Fe])Ir(l.i,s);else{var c=s.type,d=s.proxy;l.removeEventListener?l.removeEventListener(c,d,s.capture):l.detachEvent?l.detachEvent(di(c),d):l.addListener&&l.removeListener&&l.removeListener(d),(c=Cr(l))?(Ir(c,s),c.h==0&&(c.src=null,l[Ar]=null)):bn(s)}}}function di(s){return s in br?br[s]:br[s]="on"+s}function tc(s,l){if(s.da)s=!0;else{l=new Le(l,this);var c=s.listener,d=s.ha||s.src;s.fa&&Rr(s),s=c.call(d,l)}return s}function Cr(s){return s=s[Ar],s instanceof Rn?s:null}var Pr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sr(s){return typeof s=="function"?s:(s[Pr]||(s[Pr]=function(l){return s.handleEvent(l)}),s[Pr])}function mt(){Ut.call(this),this.i=new Rn(this),this.M=this,this.F=null}V(mt,Ut),mt.prototype[Fe]=!0,mt.prototype.removeEventListener=function(s,l,c,d){hi(this,s,l,c,d)};function Et(s,l){var c,d=s.F;if(d)for(c=[];d;d=d.F)c.push(d);if(s=s.M,d=l.type||l,typeof l=="string")l=new ft(l,s);else if(l instanceof ft)l.target=l.target||s;else{var I=l;l=new ft(d,s),v(l,I)}if(I=!0,c)for(var A=c.length-1;0<=A;A--){var S=l.g=c[A];I=Cn(S,d,!0,l)&&I}if(S=l.g=s,I=Cn(S,d,!0,l)&&I,I=Cn(S,d,!1,l)&&I,c)for(A=0;A<c.length;A++)S=l.g=c[A],I=Cn(S,d,!1,l)&&I}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var s=this.i,l;for(l in s.g){for(var c=s.g[l],d=0;d<c.length;d++)bn(c[d]);delete s.g[l],s.h--}}this.F=null},mt.prototype.K=function(s,l,c,d){return this.i.add(String(s),l,!1,c,d)},mt.prototype.L=function(s,l,c,d){return this.i.add(String(s),l,!0,c,d)};function Cn(s,l,c,d){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();for(var I=!0,A=0;A<l.length;++A){var S=l[A];if(S&&!S.da&&S.capture==c){var Q=S.listener,lt=S.ha||S.src;S.fa&&Ir(s.i,S),I=Q.call(lt,d)!==!1&&I}}return I&&!d.defaultPrevented}function fi(s,l,c){if(typeof s=="function")c&&(s=b(s,c));else if(s&&typeof s.handleEvent=="function")s=b(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(s,l||0)}function mi(s){s.g=fi(()=>{s.g=null,s.i&&(s.i=!1,mi(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class ec extends Ut{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:mi(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ue(s){Ut.call(this),this.h=s,this.g={}}V(Ue,Ut);var pi=[];function gi(s){nt(s.g,function(l,c){this.g.hasOwnProperty(c)&&Rr(l)},s),s.g={}}Ue.prototype.N=function(){Ue.aa.N.call(this),gi(this)},Ue.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Nr=u.JSON.stringify,nc=u.JSON.parse,rc=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function Vr(){}Vr.prototype.h=null;function _i(s){return s.h||(s.h=s.i())}function yi(){}var Be={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Dr(){ft.call(this,"d")}V(Dr,ft);function kr(){ft.call(this,"c")}V(kr,ft);var Jt={},vi=null;function Pn(){return vi=vi||new mt}Jt.La="serverreachability";function Ei(s){ft.call(this,Jt.La,s)}V(Ei,ft);function qe(s){const l=Pn();Et(l,new Ei(l))}Jt.STAT_EVENT="statevent";function wi(s,l){ft.call(this,Jt.STAT_EVENT,s),this.stat=l}V(wi,ft);function wt(s){const l=Pn();Et(l,new wi(l,s))}Jt.Ma="timingevent";function Ti(s,l){ft.call(this,Jt.Ma,s),this.size=l}V(Ti,ft);function ze(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},l)}function $e(){this.g=!0}$e.prototype.xa=function(){this.g=!1};function sc(s,l,c,d,I,A){s.info(function(){if(s.g)if(A)for(var S="",Q=A.split("&"),lt=0;lt<Q.length;lt++){var W=Q[lt].split("=");if(1<W.length){var pt=W[0];W=W[1];var gt=pt.split("_");S=2<=gt.length&&gt[1]=="type"?S+(pt+"="+W+"&"):S+(pt+"=redacted&")}}else S=null;else S=A;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+l+`
`+c+`
`+S})}function ic(s,l,c,d,I,A,S){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+l+`
`+c+`
`+A+" "+S})}function fe(s,l,c,d){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+ac(s,c)+(d?" "+d:"")})}function oc(s,l){s.info(function(){return"TIMEOUT: "+l})}$e.prototype.info=function(){};function ac(s,l){if(!s.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var d=c[s];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var A=I[0];if(A!="noop"&&A!="stop"&&A!="close")for(var S=1;S<I.length;S++)I[S]=""}}}}return Nr(c)}catch{return l}}var Sn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ii={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},jr;function Nn(){}V(Nn,Vr),Nn.prototype.g=function(){return new XMLHttpRequest},Nn.prototype.i=function(){return{}},jr=new Nn;function Bt(s,l,c,d){this.j=s,this.i=l,this.l=c,this.R=d||1,this.U=new Ue(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xi}function xi(){this.i=null,this.g="",this.h=!1}var Ai={},Or={};function Mr(s,l,c){s.L=1,s.v=jn(jt(l)),s.m=c,s.P=!0,bi(s,null)}function bi(s,l){s.F=Date.now(),Vn(s),s.A=jt(s.v);var c=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),Ui(c.i,"t",d),s.C=0,c=s.j.J,s.h=new xi,s.g=so(s.j,c?l:null,!s.m),0<s.O&&(s.M=new ec(b(s.Y,s,s.g),s.O)),l=s.U,c=s.g,d=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(pi[0]=I.toString()),I=pi);for(var A=0;A<I.length;A++){var S=li(c,I[A],d||l.handleEvent,!1,l.h||l);if(!S)break;l.g[S.key]=S}l=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,l)):(s.u="GET",s.g.ea(s.A,s.u,null,l)),qe(),sc(s.i,s.u,s.A,s.l,s.R,s.m)}Bt.prototype.ca=function(s){s=s.target;const l=this.M;l&&Ot(s)==3?l.j():this.Y(s)},Bt.prototype.Y=function(s){try{if(s==this.g)t:{const gt=Ot(this.g);var l=this.g.Ba();const ge=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Ki(this.g)))){this.J||gt!=4||l==7||(l==8||0>=ge?qe(3):qe(2)),Lr(this);var c=this.g.Z();this.X=c;e:if(Ri(this)){var d=Ki(this.g);s="";var I=d.length,A=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zt(this),We(this);var S="";break e}this.h.i=new u.TextDecoder}for(l=0;l<I;l++)this.h.h=!0,s+=this.h.i.decode(d[l],{stream:!(A&&l==I-1)});d.length=0,this.h.g+=s,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=c==200,ic(this.i,this.u,this.A,this.l,this.R,gt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,lt=this.g;if((Q=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(Q)){var W=Q;break e}}W=null}if(c=W)fe(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fr(this,c);else{this.o=!1,this.s=3,wt(12),Zt(this),We(this);break t}}if(this.P){c=!0;let Ct;for(;!this.J&&this.C<S.length;)if(Ct=lc(this,S),Ct==Or){gt==4&&(this.s=4,wt(14),c=!1),fe(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==Ai){this.s=4,wt(15),fe(this.i,this.l,S,"[Invalid Chunk]"),c=!1;break}else fe(this.i,this.l,Ct,null),Fr(this,Ct);if(Ri(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||S.length!=0||this.h.h||(this.s=1,wt(16),c=!1),this.o=this.o&&c,!c)fe(this.i,this.l,S,"[Invalid Chunked Response]"),Zt(this),We(this);else if(0<S.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Wr(pt),pt.M=!0,wt(11))}}else fe(this.i,this.l,S,null),Fr(this,S);gt==4&&Zt(this),this.o&&!this.J&&(gt==4?to(this.j,this):(this.o=!1,Vn(this)))}else Ac(this.g),c==400&&0<S.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),Zt(this),We(this)}}}catch{}finally{}};function Ri(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function lc(s,l){var c=s.C,d=l.indexOf(`
`,c);return d==-1?Or:(c=Number(l.substring(c,d)),isNaN(c)?Ai:(d+=1,d+c>l.length?Or:(l=l.slice(d,d+c),s.C=d+c,l)))}Bt.prototype.cancel=function(){this.J=!0,Zt(this)};function Vn(s){s.S=Date.now()+s.I,Ci(s,s.I)}function Ci(s,l){if(s.B!=null)throw Error("WatchDog timer not null");s.B=ze(b(s.ba,s),l)}function Lr(s){s.B&&(u.clearTimeout(s.B),s.B=null)}Bt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(oc(this.i,this.A),this.L!=2&&(qe(),wt(17)),Zt(this),this.s=2,We(this)):Ci(this,this.S-s)};function We(s){s.j.G==0||s.J||to(s.j,s)}function Zt(s){Lr(s);var l=s.M;l&&typeof l.ma=="function"&&l.ma(),s.M=null,gi(s.U),s.g&&(l=s.g,s.g=null,l.abort(),l.ma())}function Fr(s,l){try{var c=s.j;if(c.G!=0&&(c.g==s||Ur(c.h,s))){if(!s.K&&Ur(c.h,s)&&c.G==3){try{var d=c.Da.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)Bn(c),Fn(c);else break t;$r(c),wt(18)}}else c.za=I[1],0<c.za-c.T&&37500>I[2]&&c.F&&c.v==0&&!c.C&&(c.C=ze(b(c.Za,c),6e3));if(1>=Ni(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else ee(c,11)}else if((s.K||c.g==s)&&Bn(c),!z(l))for(I=c.Da.g.parse(l),l=0;l<I.length;l++){let W=I[l];if(c.T=W[0],W=W[1],c.G==2)if(W[0]=="c"){c.K=W[1],c.ia=W[2];const pt=W[3];pt!=null&&(c.la=pt,c.j.info("VER="+c.la));const gt=W[4];gt!=null&&(c.Aa=gt,c.j.info("SVER="+c.Aa));const ge=W[5];ge!=null&&typeof ge=="number"&&0<ge&&(d=1.5*ge,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const Ct=s.g;if(Ct){const zn=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zn){var A=d.h;A.g||zn.indexOf("spdy")==-1&&zn.indexOf("quic")==-1&&zn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Br(A,A.h),A.h=null))}if(d.D){const Hr=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;Hr&&(d.ya=Hr,Y(d.I,d.D,Hr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var S=s;if(d.qa=ro(d,d.J?d.ia:null,d.W),S.K){Vi(d.h,S);var Q=S,lt=d.L;lt&&(Q.I=lt),Q.B&&(Lr(Q),Vn(Q)),d.g=S}else Ji(d);0<c.i.length&&Un(c)}else W[0]!="stop"&&W[0]!="close"||ee(c,7);else c.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?ee(c,7):zr(c):W[0]!="noop"&&c.l&&c.l.ta(W),c.v=0)}}qe(4)}catch{}}var cc=class{constructor(s,l){this.g=s,this.map=l}};function Pi(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Si(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Ni(s){return s.h?1:s.g?s.g.size:0}function Ur(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function Br(s,l){s.g?s.g.add(l):s.h=l}function Vi(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}Pi.prototype.cancel=function(){if(this.i=Di(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Di(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const c of s.g.values())l=l.concat(c.D);return l}return j(s.i)}function uc(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var l=[],c=s.length,d=0;d<c;d++)l.push(s[d]);return l}l=[],c=0;for(d in s)l[c++]=s[d];return l}function hc(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var l=[];s=s.length;for(var c=0;c<s;c++)l.push(c);return l}l=[],c=0;for(const d in s)l[c++]=d;return l}}}function ki(s,l){if(s.forEach&&typeof s.forEach=="function")s.forEach(l,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,l,void 0);else for(var c=hc(s),d=uc(s),I=d.length,A=0;A<I;A++)l.call(void 0,d[A],c&&c[A],s)}var ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dc(s,l){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var d=s[c].indexOf("="),I=null;if(0<=d){var A=s[c].substring(0,d);I=s[c].substring(d+1)}else A=s[c];l(A,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function te(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof te){this.h=s.h,Dn(this,s.j),this.o=s.o,this.g=s.g,kn(this,s.s),this.l=s.l;var l=s.i,c=new Ge;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),Oi(this,c),this.m=s.m}else s&&(l=String(s).match(ji))?(this.h=!1,Dn(this,l[1]||"",!0),this.o=He(l[2]||""),this.g=He(l[3]||"",!0),kn(this,l[4]),this.l=He(l[5]||"",!0),Oi(this,l[6]||"",!0),this.m=He(l[7]||"")):(this.h=!1,this.i=new Ge(null,this.h))}te.prototype.toString=function(){var s=[],l=this.j;l&&s.push(Ke(l,Mi,!0),":");var c=this.g;return(c||l=="file")&&(s.push("//"),(l=this.o)&&s.push(Ke(l,Mi,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Ke(c,c.charAt(0)=="/"?pc:mc,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Ke(c,_c)),s.join("")};function jt(s){return new te(s)}function Dn(s,l,c){s.j=c?He(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function kn(s,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);s.s=l}else s.s=null}function Oi(s,l,c){l instanceof Ge?(s.i=l,yc(s.i,s.h)):(c||(l=Ke(l,gc)),s.i=new Ge(l,s.h))}function Y(s,l,c){s.i.set(l,c)}function jn(s){return Y(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function He(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ke(s,l,c){return typeof s=="string"?(s=encodeURI(s).replace(l,fc),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function fc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Mi=/[#\/\?@]/g,mc=/[#\?:]/g,pc=/[#\?]/g,gc=/[#\?@]/g,_c=/#/g;function Ge(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function qt(s){s.g||(s.g=new Map,s.h=0,s.i&&dc(s.i,function(l,c){s.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=Ge.prototype,n.add=function(s,l){qt(this),this.i=null,s=me(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(l),this.h+=1,this};function Li(s,l){qt(s),l=me(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function Fi(s,l){return qt(s),l=me(s,l),s.g.has(l)}n.forEach=function(s,l){qt(this),this.g.forEach(function(c,d){c.forEach(function(I){s.call(l,I,d,this)},this)},this)},n.na=function(){qt(this);const s=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let d=0;d<l.length;d++){const I=s[d];for(let A=0;A<I.length;A++)c.push(l[d])}return c},n.V=function(s){qt(this);let l=[];if(typeof s=="string")Fi(this,s)&&(l=l.concat(this.g.get(me(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)l=l.concat(s[c])}return l},n.set=function(s,l){return qt(this),this.i=null,s=me(this,s),Fi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},n.get=function(s,l){return s?(s=this.V(s),0<s.length?String(s[0]):l):l};function Ui(s,l,c){Li(s,l),0<c.length&&(s.i=null,s.g.set(me(s,l),j(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var d=l[c];const A=encodeURIComponent(String(d)),S=this.V(d);for(d=0;d<S.length;d++){var I=A;S[d]!==""&&(I+="="+encodeURIComponent(String(S[d]))),s.push(I)}}return this.i=s.join("&")};function me(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function yc(s,l){l&&!s.j&&(qt(s),s.i=null,s.g.forEach(function(c,d){var I=d.toLowerCase();d!=I&&(Li(this,d),Ui(this,I,c))},s)),s.j=l}function vc(s,l){const c=new $e;if(u.Image){const d=new Image;d.onload=C(zt,c,"TestLoadImage: loaded",!0,l,d),d.onerror=C(zt,c,"TestLoadImage: error",!1,l,d),d.onabort=C(zt,c,"TestLoadImage: abort",!1,l,d),d.ontimeout=C(zt,c,"TestLoadImage: timeout",!1,l,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else l(!1)}function Ec(s,l){const c=new $e,d=new AbortController,I=setTimeout(()=>{d.abort(),zt(c,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:d.signal}).then(A=>{clearTimeout(I),A.ok?zt(c,"TestPingServer: ok",!0,l):zt(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(I),zt(c,"TestPingServer: error",!1,l)})}function zt(s,l,c,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(c)}catch{}}function wc(){this.g=new rc}function Tc(s,l,c){const d=c||"";try{ki(s,function(I,A){let S=I;m(I)&&(S=Nr(I)),l.push(d+A+"="+encodeURIComponent(S))})}catch(I){throw l.push(d+"type="+encodeURIComponent("_badmap")),I}}function On(s){this.l=s.Ub||null,this.j=s.eb||!1}V(On,Vr),On.prototype.g=function(){return new Mn(this.l,this.j)},On.prototype.i=function(s){return function(){return s}}({});function Mn(s,l){mt.call(this),this.D=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Mn,mt),n=Mn.prototype,n.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=l,this.readyState=1,Ye(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(l.body=s),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qe(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ye(this)),this.g&&(this.readyState=3,Ye(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?Qe(this):Ye(this),this.readyState==3&&Bi(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Qe(this))},n.Qa=function(s){this.g&&(this.response=s,Qe(this))},n.ga=function(){this.g&&Qe(this)};function Qe(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Ye(s)}n.setRequestHeader=function(s,l){this.u.append(s,l)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=l.next();return s.join(`\r
`)};function Ye(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Mn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function qi(s){let l="";return nt(s,function(c,d){l+=d,l+=":",l+=c,l+=`\r
`}),l}function qr(s,l,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=qi(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):Y(s,l,c))}function Z(s){mt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Z,mt);var Ic=/^https?$/i,xc=["POST","PUT"];n=Z.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,l,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():jr.g(),this.v=this.o?_i(this.o):_i(jr),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(A){zi(this,A);return}if(s=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)c.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const A of d.keys())c.set(A,d.get(A));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(A=>A.toLowerCase()=="content-type"),I=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(xc,l,void 0))||d||I||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,S]of c)this.g.setRequestHeader(A,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hi(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){zi(this,A)}};function zi(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.m=5,$i(s),Ln(s)}function $i(s){s.A||(s.A=!0,Et(s,"complete"),Et(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Et(this,"complete"),Et(this,"abort"),Ln(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ln(this,!0)),Z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Wi(this):this.bb())},n.bb=function(){Wi(this)};function Wi(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Ot(s)!=4||s.Z()!=2)){if(s.u&&Ot(s)==4)fi(s.Ea,0,s);else if(Et(s,"readystatechange"),Ot(s)==4){s.h=!1;try{const S=s.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var c;if(!(c=l)){var d;if(d=S===0){var I=String(s.D).match(ji)[1]||null;!I&&u.self&&u.self.location&&(I=u.self.location.protocol.slice(0,-1)),d=!Ic.test(I?I.toLowerCase():"")}c=d}if(c)Et(s,"complete"),Et(s,"success");else{s.m=6;try{var A=2<Ot(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",$i(s)}}finally{Ln(s)}}}}function Ln(s,l){if(s.g){Hi(s);const c=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,l||Et(s,"ready");try{c.onreadystatechange=d}catch{}}}function Hi(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ot(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),nc(l)}};function Ki(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ac(s){const l={};s=(s.g&&2<=Ot(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(z(s[d]))continue;var c=w(s[d]);const I=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const A=l[I]||[];l[I]=A,A.push(c)}T(l,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xe(s,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||l}function Gi(s){this.Aa=0,this.i=[],this.j=new $e,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xe("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xe("baseRetryDelayMs",5e3,s),this.cb=Xe("retryDelaySeedMs",1e4,s),this.Wa=Xe("forwardChannelMaxRetries",2,s),this.wa=Xe("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Pi(s&&s.concurrentRequestLimit),this.Da=new wc,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Gi.prototype,n.la=8,n.G=1,n.connect=function(s,l,c,d){wt(0),this.W=s,this.H=l||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=ro(this,null,this.W),Un(this)};function zr(s){if(Qi(s),s.G==3){var l=s.U++,c=jt(s.I);if(Y(c,"SID",s.K),Y(c,"RID",l),Y(c,"TYPE","terminate"),Je(s,c),l=new Bt(s,s.j,l),l.L=2,l.v=jn(jt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=so(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Vn(l)}no(s)}function Fn(s){s.g&&(Wr(s),s.g.cancel(),s.g=null)}function Qi(s){Fn(s),s.u&&(u.clearTimeout(s.u),s.u=null),Bn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function Un(s){if(!Si(s.h)&&!s.s){s.s=!0;var l=s.Ga;Oe||ai(),Me||(Oe(),Me=!0),Tr.add(l,s),s.B=0}}function bc(s,l){return Ni(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=l.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=ze(b(s.Ga,s,l),eo(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new Bt(this,this.j,s);let A=this.o;if(this.S&&(A?(A=p(A),v(A,this.S)):A=this.S),this.m!==null||this.O||(I.H=A,A=null),this.P)t:{for(var l=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(l+=d,4096<l){l=c;break t}if(l===4096||c===this.i.length-1){l=c+1;break t}}l=1e3}else l=1e3;l=Xi(this,I,l),c=jt(this.I),Y(c,"RID",s),Y(c,"CVER",22),this.D&&Y(c,"X-HTTP-Session-Id",this.D),Je(this,c),A&&(this.O?l="headers="+encodeURIComponent(String(qi(A)))+"&"+l:this.m&&qr(c,this.m,A)),Br(this.h,I),this.Ua&&Y(c,"TYPE","init"),this.P?(Y(c,"$req",l),Y(c,"SID","null"),I.T=!0,Mr(I,c,null)):Mr(I,c,l),this.G=2}}else this.G==3&&(s?Yi(this,s):this.i.length==0||Si(this.h)||Yi(this))};function Yi(s,l){var c;l?c=l.l:c=s.U++;const d=jt(s.I);Y(d,"SID",s.K),Y(d,"RID",c),Y(d,"AID",s.T),Je(s,d),s.m&&s.o&&qr(d,s.m,s.o),c=new Bt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),l&&(s.i=l.D.concat(s.i)),l=Xi(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Br(s.h,c),Mr(c,d,l)}function Je(s,l){s.H&&nt(s.H,function(c,d){Y(l,d,c)}),s.l&&ki({},function(c,d){Y(l,d,c)})}function Xi(s,l,c){c=Math.min(s.i.length,c);var d=s.l?b(s.l.Na,s.l,s):null;t:{var I=s.i;let A=-1;for(;;){const S=["count="+c];A==-1?0<c?(A=I[0].g,S.push("ofs="+A)):A=0:S.push("ofs="+A);let Q=!0;for(let lt=0;lt<c;lt++){let W=I[lt].g;const pt=I[lt].map;if(W-=A,0>W)A=Math.max(0,I[lt].g-100),Q=!1;else try{Tc(pt,S,"req"+W+"_")}catch{d&&d(pt)}}if(Q){d=S.join("&");break t}}}return s=s.i.splice(0,c),l.D=s,d}function Ji(s){if(!s.g&&!s.u){s.Y=1;var l=s.Fa;Oe||ai(),Me||(Oe(),Me=!0),Tr.add(l,s),s.v=0}}function $r(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=ze(b(s.Fa,s),eo(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Zi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=ze(b(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),Fn(this),Zi(this))};function Wr(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function Zi(s){s.g=new Bt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var l=jt(s.qa);Y(l,"RID","rpc"),Y(l,"SID",s.K),Y(l,"AID",s.T),Y(l,"CI",s.F?"0":"1"),!s.F&&s.ja&&Y(l,"TO",s.ja),Y(l,"TYPE","xmlhttp"),Je(s,l),s.m&&s.o&&qr(l,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=jn(jt(l)),c.m=null,c.P=!0,bi(c,s)}n.Za=function(){this.C!=null&&(this.C=null,Fn(this),$r(this),wt(19))};function Bn(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function to(s,l){var c=null;if(s.g==l){Bn(s),Wr(s),s.g=null;var d=2}else if(Ur(s.h,l))c=l.D,Vi(s.h,l),d=1;else return;if(s.G!=0){if(l.o)if(d==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var I=s.B;d=Pn(),Et(d,new Ti(d,c)),Un(s)}else Ji(s);else if(I=l.s,I==3||I==0&&0<l.X||!(d==1&&bc(s,l)||d==2&&$r(s)))switch(c&&0<c.length&&(l=s.h,l.i=l.i.concat(c)),I){case 1:ee(s,5);break;case 4:ee(s,10);break;case 3:ee(s,6);break;default:ee(s,2)}}}function eo(s,l){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*l}function ee(s,l){if(s.j.info("Error code "+l),l==2){var c=b(s.fb,s),d=s.Xa;const I=!d;d=new te(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Dn(d,"https"),jn(d),I?vc(d.toString(),c):Ec(d.toString(),c)}else wt(2);s.G=0,s.l&&s.l.sa(l),no(s),Qi(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function no(s){if(s.G=0,s.ka=[],s.l){const l=Di(s.h);(l.length!=0||s.i.length!=0)&&(N(s.ka,l),N(s.ka,s.i),s.h.i.length=0,j(s.i),s.i.length=0),s.l.ra()}}function ro(s,l,c){var d=c instanceof te?jt(c):new te(c);if(d.g!="")l&&(d.g=l+"."+d.g),kn(d,d.s);else{var I=u.location;d=I.protocol,l=l?l+"."+I.hostname:I.hostname,I=+I.port;var A=new te(null);d&&Dn(A,d),l&&(A.g=l),I&&kn(A,I),c&&(A.l=c),d=A}return c=s.D,l=s.ya,c&&l&&Y(d,c,l),Y(d,"VER",s.la),Je(s,d),d}function so(s,l,c){if(l&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Ca&&!s.pa?new Z(new On({eb:c})):new Z(s.pa),l.Ha(s.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function io(){}n=io.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function qn(){}qn.prototype.g=function(s,l){return new xt(s,l)};function xt(s,l){mt.call(this),this.g=new Gi(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(s?s["X-WebChannel-Client-Profile"]=l.va:s={"X-WebChannel-Client-Profile":l.va}),this.g.S=s,(s=l&&l.Sb)&&!z(s)&&(this.g.m=s),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!z(l)&&(this.g.D=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new pe(this)}V(xt,mt),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){zr(this.g)},xt.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=Nr(s),s=c);l.i.push(new cc(l.Ya++,s)),l.G==3&&Un(l)},xt.prototype.N=function(){this.g.l=null,delete this.j,zr(this.g),delete this.g,xt.aa.N.call(this)};function oo(s){Dr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){t:{for(const c in l){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}V(oo,Dr);function ao(){kr.call(this),this.status=1}V(ao,kr);function pe(s){this.g=s}V(pe,io),pe.prototype.ua=function(){Et(this.g,"a")},pe.prototype.ta=function(s){Et(this.g,new oo(s))},pe.prototype.sa=function(s){Et(this.g,new ao)},pe.prototype.ra=function(){Et(this.g,"b")},qn.prototype.createWebChannel=qn.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Sa=function(){return new qn},Pa=function(){return Pn()},Ca=Jt,us={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Sn.NO_ERROR=0,Sn.TIMEOUT=8,Sn.HTTP_ERROR=6,Gn=Sn,Ii.COMPLETE="complete",Ra=Ii,yi.EventType=Be,Be.OPEN="a",Be.CLOSE="b",Be.ERROR="c",Be.MESSAGE="d",mt.prototype.listen=mt.prototype.K,tn=yi,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,ba=Z}).apply(typeof $n<"u"?$n:typeof self<"u"?self:typeof window<"u"?window:{});const xo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ne="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new va("@firebase/firestore");function Ze(){return ae.logLevel}function k(n,...t){if(ae.logLevel<=$.DEBUG){const e=t.map(Rs);ae.debug(`Firestore (${Ne}): ${n}`,...e)}}function Lt(n,...t){if(ae.logLevel<=$.ERROR){const e=t.map(Rs);ae.error(`Firestore (${Ne}): ${n}`,...e)}}function Ie(n,...t){if(ae.logLevel<=$.WARN){const e=t.map(Rs);ae.warn(`Firestore (${Ne}): ${n}`,...e)}}function Rs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n="Unexpected state"){const t=`FIRESTORE (${Ne}) INTERNAL ASSERTION FAILED: `+n;throw Lt(t),new Error(t)}function G(n,t){n||M()}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Se{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class rd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(yt.UNAUTHENTICATED))}shutdown(){}}class sd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class id{constructor(t){this.t=t,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){G(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new ie;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ie,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ie)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string"),new Na(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return G(t===null||typeof t=="string"),new yt(t)}}class od{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ad{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new od(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ld{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cd{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){G(this.o===void 0);const r=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,k("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(G(typeof e.token=="string"),this.R=e.token,new ld(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=ud(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function H(n,t){return n<t?-1:n>t?1:0}function xe(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new D(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new ot(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?H(this.nanoseconds,t.nanoseconds):H(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.timestamp=t}static fromTimestamp(t){return new L(t)}static min(){return new L(new ot(0,0))}static max(){return new L(new ot(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(),r===void 0?r=t.length-e:r>t.length-e&&M(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return hn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof hn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends hn{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new D(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new X(e)}static emptyPath(){return new X([])}}const hd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends hn{construct(t,e,r){return new ut(t,e,r)}static isValidIdentifier(t){return hd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new D(R.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const u=t[i];if(u==="\\"){if(i+1===t.length)throw new D(R.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new D(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new D(R.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(X.fromString(t))}static fromName(t){return new O(X.fromString(t).popFirst(5))}static empty(){return new O(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new X(t.slice()))}}function dd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=L.fromTimestamp(r===1e9?new ot(e+1,0):new ot(e,r));return new Gt(i,O.empty(),t)}function fd(n){return new Gt(n.readTime,n.key,-1)}class Gt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Gt(L.min(),O.empty(),-1)}static max(){return new Gt(L.max(),O.empty(),-1)}}function md(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:H(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==pd)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let i=0,o=0,a=!1;t.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&e()},h=>r(h))}),a=!0,o===i&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(i=>i?P.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,i)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const m=h;e(t[m]).next(g=>{a[m]=g,++u,u===o&&r(a)},g=>i(g))}})}static doWhile(t,e){return new P((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function _d(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function En(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Cs.oe=-1;function hr(n){return n==null}function nr(n){return n===0&&1/n==-1/0}function yd(n){return typeof n=="number"&&Number.isInteger(n)&&!nr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ve(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Da(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.comparator=t,this.root=e||ct.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Wn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Wn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Wn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Wn(this.root,t,this.comparator,!0)}}class Wn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ct.RED,this.left=i??ct.EMPTY,this.right=o??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ct(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,r,i,o){return this}insert(t,e,r){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new bo(this.data.getIterator())}getIteratorFrom(t){return new bo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ht)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ht(this.comparator);return e.data=t,e}}class bo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new Pt([])}unionWith(t){let e=new ht(ut.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Pt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return xe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ka("Invalid base64 string: "+o):o}}(t);return new dt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return H(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const vd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(n){if(G(!!n),typeof n=="string"){let t=0;const e=vd.exec(n);if(G(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:et(n.seconds),nanos:et(n.nanos)}}function et(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function le(n){return typeof n=="string"?dt.fromBase64String(n):dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Ss(n){const t=n.mapValue.fields.__previous_value__;return Ps(t)?Ss(t):t}function dn(n){const t=Qt(n.mapValue.fields.__local_write_time__.timestampValue);return new ot(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,e,r,i,o,a,u,h,m){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=m}}class fn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new fn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof fn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ce(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ps(n)?4:Td(n)?9007199254740991:wd(n)?10:11:M()}function kt(n,t){if(n===t)return!0;const e=ce(n);if(e!==ce(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return dn(n).isEqual(dn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Qt(i.timestampValue),u=Qt(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return le(i.bytesValue).isEqual(le(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return et(i.geoPointValue.latitude)===et(o.geoPointValue.latitude)&&et(i.geoPointValue.longitude)===et(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return et(i.integerValue)===et(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=et(i.doubleValue),u=et(o.doubleValue);return a===u?nr(a)===nr(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return xe(n.arrayValue.values||[],t.arrayValue.values||[],kt);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Ao(a)!==Ao(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!kt(a[h],u[h])))return!1;return!0}(n,t);default:return M()}}function mn(n,t){return(n.values||[]).find(e=>kt(e,t))!==void 0}function Ae(n,t){if(n===t)return 0;const e=ce(n),r=ce(t);if(e!==r)return H(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=et(o.integerValue||o.doubleValue),h=et(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return Ro(n.timestampValue,t.timestampValue);case 4:return Ro(dn(n),dn(t));case 5:return H(n.stringValue,t.stringValue);case 6:return function(o,a){const u=le(o),h=le(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let m=0;m<u.length&&m<h.length;m++){const g=H(u[m],h[m]);if(g!==0)return g}return H(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=H(et(o.latitude),et(a.latitude));return u!==0?u:H(et(o.longitude),et(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Co(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,m,g;const x=o.fields||{},b=a.fields||{},C=(u=x.value)===null||u===void 0?void 0:u.arrayValue,V=(h=b.value)===null||h===void 0?void 0:h.arrayValue,j=H(((m=C==null?void 0:C.values)===null||m===void 0?void 0:m.length)||0,((g=V==null?void 0:V.values)===null||g===void 0?void 0:g.length)||0);return j!==0?j:Co(C,V)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Hn.mapValue&&a===Hn.mapValue)return 0;if(o===Hn.mapValue)return 1;if(a===Hn.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),m=a.fields||{},g=Object.keys(m);h.sort(),g.sort();for(let x=0;x<h.length&&x<g.length;++x){const b=H(h[x],g[x]);if(b!==0)return b;const C=Ae(u[h[x]],m[g[x]]);if(C!==0)return C}return H(h.length,g.length)}(n.mapValue,t.mapValue);default:throw M()}}function Ro(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return H(n,t);const e=Qt(n),r=Qt(t),i=H(e.seconds,r.seconds);return i!==0?i:H(e.nanos,r.nanos)}function Co(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ae(e[i],r[i]);if(o)return o}return H(e.length,r.length)}function be(n){return hs(n)}function hs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Qt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return le(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=hs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${hs(e.fields[a])}`;return i+"}"}(n.mapValue):M()}function Po(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ds(n){return!!n&&"integerValue"in n}function Ns(n){return!!n&&"arrayValue"in n}function So(n){return!!n&&"nullValue"in n}function No(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Qn(n){return!!n&&"mapValue"in n}function wd(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function sn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ve(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=sn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=sn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Td(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.value=t}static empty(){return new Rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Qn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=sn(e)}setAll(t){let e=ut.emptyPath(),r={},i=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=u.popLast()}a?r[u.lastSegment()]=sn(a):i.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Qn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Qn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Ve(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Rt(sn(this.value))}}function ja(n){const t=[];return Ve(n.fields,(e,r)=>{const i=new ut([e]);if(Qn(r)){const o=ja(r.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new Pt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e,r,i,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new vt(t,0,L.min(),L.min(),L.min(),Rt.empty(),0)}static newFoundDocument(t,e,r,i){return new vt(t,1,e,L.min(),r,i,0)}static newNoDocument(t,e){return new vt(t,2,e,L.min(),L.min(),Rt.empty(),0)}static newUnknownDocument(t,e){return new vt(t,3,e,L.min(),L.min(),Rt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,e){this.position=t,this.inclusive=e}}function Vo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=Ae(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Do(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!kt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Id(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{}class it extends Oa{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Ad(t,e,r):e==="array-contains"?new Cd(t,r):e==="in"?new Pd(t,r):e==="not-in"?new Sd(t,r):e==="array-contains-any"?new Nd(t,r):new it(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new bd(t,r):new Rd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ae(e,this.value)):e!==null&&ce(this.value)===ce(e)&&this.matchesComparison(Ae(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class St extends Oa{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new St(t,e)}matches(t){return Ma(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ma(n){return n.op==="and"}function La(n){return xd(n)&&Ma(n)}function xd(n){for(const t of n.filters)if(t instanceof St)return!1;return!0}function fs(n){if(n instanceof it)return n.field.canonicalString()+n.op.toString()+be(n.value);if(La(n))return n.filters.map(t=>fs(t)).join(",");{const t=n.filters.map(e=>fs(e)).join(",");return`${n.op}(${t})`}}function Fa(n,t){return n instanceof it?function(r,i){return i instanceof it&&r.op===i.op&&r.field.isEqual(i.field)&&kt(r.value,i.value)}(n,t):n instanceof St?function(r,i){return i instanceof St&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,u)=>o&&Fa(a,i.filters[u]),!0):!1}(n,t):void M()}function Ua(n){return n instanceof it?function(e){return`${e.field.canonicalString()} ${e.op} ${be(e.value)}`}(n):n instanceof St?function(e){return e.op.toString()+" {"+e.getFilters().map(Ua).join(" ,")+"}"}(n):"Filter"}class Ad extends it{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class bd extends it{constructor(t,e){super(t,"in",e),this.keys=Ba("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Rd extends it{constructor(t,e){super(t,"not-in",e),this.keys=Ba("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ba(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class Cd extends it{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ns(e)&&mn(e.arrayValue,this.value)}}class Pd extends it{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&mn(this.value.arrayValue,e)}}class Sd extends it{constructor(t,e){super(t,"not-in",e)}matches(t){if(mn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!mn(this.value.arrayValue,e)}}class Nd extends it{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ns(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>mn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t,e=null,r=[],i=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function ko(n,t=null,e=[],r=[],i=null,o=null,a=null){return new Vd(n,t,e,r,i,o,a)}function Vs(n){const t=F(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>fs(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),hr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>be(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>be(r)).join(",")),t.ue=e}return t.ue}function Ds(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Id(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Fa(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Do(n.startAt,t.startAt)&&Do(n.endAt,t.endAt)}function ms(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t,e=null,r=[],i=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Dd(n,t,e,r,i,o,a,u){return new De(n,t,e,r,i,o,a,u)}function ks(n){return new De(n)}function jo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function qa(n){return n.collectionGroup!==null}function on(n){const t=F(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ht(ut.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(m=>{m.isInequality()&&(u=u.add(m.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new pn(o,r))}),e.has(ut.keyField().canonicalString())||t.ce.push(new pn(ut.keyField(),r))}return t.ce}function Nt(n){const t=F(n);return t.le||(t.le=kd(t,on(n))),t.le}function kd(n,t){if(n.limitType==="F")return ko(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new pn(i.field,o)});const e=n.endAt?new rr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new rr(n.startAt.position,n.startAt.inclusive):null;return ko(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ps(n,t){const e=n.filters.concat([t]);return new De(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function gs(n,t,e){return new De(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function dr(n,t){return Ds(Nt(n),Nt(t))&&n.limitType===t.limitType}function za(n){return`${Vs(Nt(n))}|lt:${n.limitType}`}function _e(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Ua(i)).join(", ")}]`),hr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>be(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>be(i)).join(",")),`Target(${r})`}(Nt(n))}; limitType=${n.limitType})`}function fr(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of on(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,u,h){const m=Vo(a,u,h);return a.inclusive?m<=0:m<0}(r.startAt,on(r),i)||r.endAt&&!function(a,u,h){const m=Vo(a,u,h);return a.inclusive?m>=0:m>0}(r.endAt,on(r),i))}(n,t)}function jd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function $a(n){return(t,e)=>{let r=!1;for(const i of on(n)){const o=Od(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Od(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),m=u.data.field(o);return h!==null&&m!==null?Ae(h,m):M()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ve(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return Da(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=new J(O.comparator);function Ft(){return Md}const Wa=new J(O.comparator);function en(...n){let t=Wa;for(const e of n)t=t.insert(e.key,e);return t}function Ha(n){let t=Wa;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function re(){return an()}function Ka(){return an()}function an(){return new ke(n=>n.toString(),(n,t)=>n.isEqual(t))}const Ld=new J(O.comparator),Fd=new ht(O.comparator);function U(...n){let t=Fd;for(const e of n)t=t.add(e);return t}const Ud=new ht(H);function Bd(){return Ud}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nr(t)?"-0":t}}function Ga(n){return{integerValue:""+n}}function qd(n,t){return yd(t)?Ga(t):js(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this._=void 0}}function zd(n,t,e){return n instanceof sr?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Ps(o)&&(o=Ss(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof gn?Ya(n,t):n instanceof _n?Xa(n,t):function(i,o){const a=Qa(i,o),u=Oo(a)+Oo(i.Pe);return ds(a)&&ds(i.Pe)?Ga(u):js(i.serializer,u)}(n,t)}function $d(n,t,e){return n instanceof gn?Ya(n,t):n instanceof _n?Xa(n,t):e}function Qa(n,t){return n instanceof ir?function(r){return ds(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class sr extends mr{}class gn extends mr{constructor(t){super(),this.elements=t}}function Ya(n,t){const e=Ja(t);for(const r of n.elements)e.some(i=>kt(i,r))||e.push(r);return{arrayValue:{values:e}}}class _n extends mr{constructor(t){super(),this.elements=t}}function Xa(n,t){let e=Ja(t);for(const r of n.elements)e=e.filter(i=>!kt(i,r));return{arrayValue:{values:e}}}class ir extends mr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Oo(n){return et(n.integerValue||n.doubleValue)}function Ja(n){return Ns(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Wd(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof gn&&i instanceof gn||r instanceof _n&&i instanceof _n?xe(r.elements,i.elements,kt):r instanceof ir&&i instanceof ir?kt(r.Pe,i.Pe):r instanceof sr&&i instanceof sr}(n.transform,t.transform)}class Hd{constructor(t,e){this.version=t,this.transformResults=e}}class Vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Yn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class pr{}function Za(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Os(n.key,Vt.none()):new wn(n.key,n.data,Vt.none());{const e=n.data,r=Rt.empty();let i=new ht(ut.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new ue(n.key,r,new Pt(i.toArray()),Vt.none())}}function Kd(n,t,e){n instanceof wn?function(i,o,a){const u=i.value.clone(),h=Lo(i.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof ue?function(i,o,a){if(!Yn(i.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Lo(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(tl(i)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function ln(n,t,e,r){return n instanceof wn?function(o,a,u,h){if(!Yn(o.precondition,a))return u;const m=o.value.clone(),g=Fo(o.fieldTransforms,h,a);return m.setAll(g),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),null}(n,t,e,r):n instanceof ue?function(o,a,u,h){if(!Yn(o.precondition,a))return u;const m=Fo(o.fieldTransforms,h,a),g=a.data;return g.setAll(tl(o)),g.setAll(m),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(x=>x.field))}(n,t,e,r):function(o,a,u){return Yn(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function Gd(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=Qa(r.transform,i||null);o!=null&&(e===null&&(e=Rt.empty()),e.set(r.field,o))}return e||null}function Mo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xe(r,i,(o,a)=>Wd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class wn extends pr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ue extends pr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function tl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Lo(n,t,e){const r=new Map;G(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,u=t.data.field(o.field);r.set(o.field,$d(a,u,e[i]))}return r}function Fo(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,zd(o,a,t))}return r}class Os extends pr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qd extends pr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Kd(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=ln(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=ln(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ka();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(i.key)?null:u;const h=Za(a,u);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&xe(this.mutations,t.mutations,(e,r)=>Mo(e,r))&&xe(this.baseMutations,t.baseMutations,(e,r)=>Mo(e,r))}}class Ms{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){G(t.mutations.length===r.length);let i=function(){return Ld}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new Ms(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,q;function Zd(n){switch(n){default:return M();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function el(n){if(n===void 0)return Lt("GRPC error has no .code"),R.UNKNOWN;switch(n){case rt.OK:return R.OK;case rt.CANCELLED:return R.CANCELLED;case rt.UNKNOWN:return R.UNKNOWN;case rt.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case rt.INTERNAL:return R.INTERNAL;case rt.UNAVAILABLE:return R.UNAVAILABLE;case rt.UNAUTHENTICATED:return R.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case rt.NOT_FOUND:return R.NOT_FOUND;case rt.ALREADY_EXISTS:return R.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return R.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case rt.ABORTED:return R.ABORTED;case rt.OUT_OF_RANGE:return R.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return R.UNIMPLEMENTED;case rt.DATA_LOSS:return R.DATA_LOSS;default:return M()}}(q=rt||(rt={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=new se([4294967295,4294967295],0);function Uo(n){const t=tf().encode(n),e=new Aa;return e.update(t),new Uint8Array(e.digest())}function Bo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new se([e,r],0),new se([i,o],0)]}class Ls{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new nn(`Invalid padding: ${e}`);if(r<0)throw new nn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new nn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new nn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=se.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(se.fromNumber(r)));return i.compare(ef)===1&&(i=new se([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Uo(t),[r,i]=Bo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ls(o,i,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.Ie===0)return;const e=Uo(t),[r,i]=Bo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class nn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Tn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new gr(L.min(),i,new J(H),Ft(),U())}}class Tn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Tn(r,e,U(),U(),U())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class nl{constructor(t,e){this.targetId=t,this.me=e}}class rl{constructor(t,e,r=dt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class qo{constructor(){this.fe=0,this.ge=$o(),this.pe=dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=U(),e=U(),r=U();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:M()}}),new Tn(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=$o()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,G(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class nf{constructor(t){this.Le=t,this.Be=new Map,this.ke=Ft(),this.qe=zo(),this.Qe=new J(H)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:M()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(ms(o))if(r===0){const a=new O(o.path);this.Ue(e,a,vt.newNoDocument(a,L.min()))}else G(r===1);else{const a=this.Ye(e);if(a!==r){const u=this.Ze(t),h=u?this.Xe(u,t,a):1;if(h!==0){this.je(e);const m=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,m)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,u;try{a=le(r).toUint8Array()}catch(h){if(h instanceof ka)return Ie("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Ls(a,i,o)}catch(h){return Ie(h instanceof nn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const u=this.Je(a);if(u){if(o.current&&ms(u.target)){const h=new O(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,vt.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=U();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const m=this.Je(h);return!m||m.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new gr(t,e,this.Qe,this.ke,r);return this.ke=Ft(),this.qe=zo(),this.Qe=new J(H),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new qo,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ht(H),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new qo),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function zo(){return new J(O.comparator)}function $o(){return new J(O.comparator)}const rf=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sf=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),of=(()=>({and:"AND",or:"OR"}))();class af{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function _s(n,t){return n.useProto3Json||hr(t)?t:{value:t}}function or(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function lf(n,t){return or(n,t.toTimestamp())}function Dt(n){return G(!!n),L.fromTimestamp(function(e){const r=Qt(e);return new ot(r.seconds,r.nanos)}(n))}function Fs(n,t){return ys(n,t).canonicalString()}function ys(n,t){const e=function(i){return new X(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function il(n){const t=X.fromString(n);return G(ul(t)),t}function vs(n,t){return Fs(n.databaseId,t.path)}function Xr(n,t){const e=il(t);if(e.get(1)!==n.databaseId.projectId)throw new D(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new D(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(al(e))}function ol(n,t){return Fs(n.databaseId,t)}function cf(n){const t=il(n);return t.length===4?X.emptyPath():al(t)}function Es(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function al(n){return G(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Wo(n,t,e){return{name:vs(n,t),fields:e.value.mapValue.fields}}function uf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(m,g){return m.useProto3Json?(G(g===void 0||typeof g=="string"),dt.fromBase64String(g||"")):(G(g===void 0||g instanceof Buffer||g instanceof Uint8Array),dt.fromUint8Array(g||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(m){const g=m.code===void 0?R.UNKNOWN:el(m.code);return new D(g,m.message||"")}(a);e=new rl(r,i,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Xr(n,r.document.name),o=Dt(r.document.updateTime),a=r.document.createTime?Dt(r.document.createTime):L.min(),u=new Rt({mapValue:{fields:r.document.fields}}),h=vt.newFoundDocument(i,o,a,u),m=r.targetIds||[],g=r.removedTargetIds||[];e=new Xn(m,g,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Xr(n,r.document),o=r.readTime?Dt(r.readTime):L.min(),a=vt.newNoDocument(i,o),u=r.removedTargetIds||[];e=new Xn([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Xr(n,r.document),o=r.removedTargetIds||[];e=new Xn([],o,i,null)}else{if(!("filter"in t))return M();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Jd(i,o),u=r.targetId;e=new nl(u,a)}}return e}function hf(n,t){let e;if(t instanceof wn)e={update:Wo(n,t.key,t.value)};else if(t instanceof Os)e={delete:vs(n,t.key)};else if(t instanceof ue)e={update:Wo(n,t.key,t.data),updateMask:Ef(t.fieldMask)};else{if(!(t instanceof Qd))return M();e={verify:vs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof sr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof gn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof _n)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof ir)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw M()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:lf(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(n,t.precondition)),e}function df(n,t){return n&&n.length>0?(G(t!==void 0),n.map(e=>function(i,o){let a=i.updateTime?Dt(i.updateTime):Dt(o);return a.isEqual(L.min())&&(a=Dt(o)),new Hd(a,i.transformResults||[])}(e,t))):[]}function ff(n,t){return{documents:[ol(n,t.path)]}}function mf(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=ol(n,i);const o=function(m){if(m.length!==0)return cl(St.create(m,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(m){if(m.length!==0)return m.map(g=>function(b){return{field:ye(b.field),direction:_f(b.dir)}}(g))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=_s(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(t.endAt)),{_t:e,parent:i}}function pf(n){let t=cf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){G(r===1);const g=e.from[0];g.allDescendants?i=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=function(x){const b=ll(x);return b instanceof St&&La(b)?b.getFilters():[b]}(e.where));let a=[];e.orderBy&&(a=function(x){return x.map(b=>function(V){return new pn(ve(V.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(b))}(e.orderBy));let u=null;e.limit&&(u=function(x){let b;return b=typeof x=="object"?x.value:x,hr(b)?null:b}(e.limit));let h=null;e.startAt&&(h=function(x){const b=!!x.before,C=x.values||[];return new rr(C,b)}(e.startAt));let m=null;return e.endAt&&(m=function(x){const b=!x.before,C=x.values||[];return new rr(C,b)}(e.endAt)),Dd(t,i,a,o,u,"F",h,m)}function gf(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ll(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ve(e.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ve(e.unaryFilter.field);return it.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ve(e.unaryFilter.field);return it.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ve(e.unaryFilter.field);return it.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return it.create(ve(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return St.create(e.compositeFilter.filters.map(r=>ll(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function _f(n){return rf[n]}function yf(n){return sf[n]}function vf(n){return of[n]}function ye(n){return{fieldPath:n.canonicalString()}}function ve(n){return ut.fromServerFormat(n.fieldPath)}function cl(n){return n instanceof it?function(e){if(e.op==="=="){if(No(e.value))return{unaryFilter:{field:ye(e.field),op:"IS_NAN"}};if(So(e.value))return{unaryFilter:{field:ye(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(No(e.value))return{unaryFilter:{field:ye(e.field),op:"IS_NOT_NAN"}};if(So(e.value))return{unaryFilter:{field:ye(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ye(e.field),op:yf(e.op),value:e.value}}}(n):n instanceof St?function(e){const r=e.getFilters().map(i=>cl(i));return r.length===1?r[0]:{compositeFilter:{op:vf(e.op),filters:r}}}(n):M()}function Ef(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ul(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e,r,i,o=L.min(),a=L.min(),u=dt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new $t(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t){this.ct=t}}function Tf(n){const t=pf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?gs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(){this.un=new xf}addToCollectionParentIndex(t,e){return this.un.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Gt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Gt.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class xf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ht(X.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ht(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Re(0)}static kn(){return new Re(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.changes=new ke(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&ln(r.mutation,i,Pt.empty(),ot.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,U()).next(()=>r))}getLocalViewOfDocuments(t,e,r=U()){const i=re();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=en();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=re();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,U()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,i){let o=Ft();const a=an(),u=function(){return an()}();return e.forEach((h,m)=>{const g=r.get(m.key);i.has(m.key)&&(g===void 0||g.mutation instanceof ue)?o=o.insert(m.key,m):g!==void 0?(a.set(m.key,g.mutation.getFieldMask()),ln(g.mutation,m,g.mutation.getFieldMask(),ot.now())):a.set(m.key,Pt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((m,g)=>a.set(m,g)),e.forEach((m,g)=>{var x;return u.set(m,new bf(g,(x=a.get(m))!==null&&x!==void 0?x:null))}),u))}recalculateAndSaveOverlays(t,e){const r=an();let i=new J((a,u)=>a-u),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const m=e.get(h);if(m===null)return;let g=r.get(h)||Pt.empty();g=u.applyToLocalView(m,g),r.set(h,g);const x=(i.get(u.batchId)||U()).add(h);i=i.insert(u.batchId,x)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),m=h.key,g=h.value,x=Ka();g.forEach(b=>{if(!o.has(b)){const C=Za(e.get(b),r.get(b));C!==null&&x.set(b,C),o=o.add(b)}}),a.push(this.documentOverlayCache.saveOverlays(t,m,x))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):qa(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):P.resolve(re());let u=-1,h=o;return a.next(m=>P.forEach(m,(g,x)=>(u<x.largestBatchId&&(u=x.largestBatchId),o.get(g)?P.resolve():this.remoteDocumentCache.getEntry(t,g).next(b=>{h=h.insert(g,b)}))).next(()=>this.populateOverlays(t,m,o)).next(()=>this.computeViews(t,h,m,U())).next(g=>({batchId:u,changes:Ha(g)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let i=en();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=en();return this.indexManager.getCollectionParents(t,o).next(u=>P.forEach(u,h=>{const m=function(x,b){return new De(b,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,m,r,i).next(g=>{g.forEach((x,b)=>{a=a.insert(x,b)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((h,m)=>{const g=m.getKey();a.get(g)===null&&(a=a.insert(g,vt.newInvalidDocument(g)))});let u=en();return a.forEach((h,m)=>{const g=o.get(h);g!==void 0&&ln(g.mutation,m,Pt.empty(),ot.now()),fr(e,m)&&(u=u.insert(h,m))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return P.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Dt(i.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:Tf(i.bundledQuery),readTime:Dt(i.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(){this.overlays=new J(O.comparator),this.Ir=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=re();return P.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const i=re(),o=e.length+1,a=new O(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,m=h.getKey();if(!e.isPrefixOf(m.path))break;m.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return P.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new J((m,g)=>m-g);const a=this.overlays.getIterator();for(;a.hasNext();){const m=a.getNext().value;if(m.getKey().getCollectionGroup()===e&&m.largestBatchId>r){let g=o.get(m.largestBatchId);g===null&&(g=re(),o=o.insert(m.largestBatchId,g)),g.set(m.getKey(),m)}}const u=re(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((m,g)=>u.set(m,g)),!(u.size()>=i)););return P.resolve(u)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Xd(e,r));let o=this.Ir.get(e);o===void 0&&(o=U(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.Tr=new ht(at.Er),this.dr=new ht(at.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new at(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new at(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new O(new X([])),r=new at(e,t),i=new at(e,t+1),o=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new O(new X([])),r=new at(e,t),i=new at(e,t+1);let o=U();return this.dr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new at(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return O.comparator(t.key,e.key)||H(t.wr,e.wr)}static Ar(t,e){return H(t.wr,e.wr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ht(at.Er)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Yd(o,e,r,i);this.mutationQueue.push(a);for(const u of i)this.br=this.br.add(new at(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.vr(r),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new at(e,0),i=new at(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],a=>{const u=this.Dr(a.wr);o.push(u)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ht(H);return e.forEach(i=>{const o=new at(i,0),a=new at(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],u=>{r=r.add(u.wr)})}),P.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new at(new O(o),0);let u=new ht(H);return this.br.forEachWhile(h=>{const m=h.key.path;return!!r.isPrefixOf(m)&&(m.length===i&&(u=u.add(h.wr)),!0)},a),P.resolve(this.Cr(u))}Cr(t){const e=[];return t.forEach(r=>{const i=this.Dr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){G(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return P.forEach(e.mutations,i=>{const o=new at(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new at(e,0),i=this.br.firstAfterOrEqual(r);return P.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t){this.Mr=t,this.docs=function(){return new J(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(e))}getEntries(t,e){let r=Ft();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():vt.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Ft();const a=e.path,u=new O(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:m,value:{document:g}}=h.getNext();if(!a.isPrefixOf(m.path))break;m.path.length>a.length+1||md(fd(g),r)<=0||(i.has(g.key)||fr(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,i){M()}Or(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Df(this)}getSize(t){return P.resolve(this.size)}}class Df extends Af{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t){this.persistence=t,this.Nr=new ke(e=>Vs(e),Ds),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Us,this.targetCount=0,this.kr=Re.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,i)=>e(i)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),P.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Re(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.Kn(e),P.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Cs(0),this.Kr=!1,this.Kr=!0,this.$r=new Sf,this.referenceDelegate=t(this),this.Ur=new kf(this),this.indexManager=new If,this.remoteDocumentCache=function(i){return new Vf(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new wf(e),this.Gr=new Cf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Pf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new Nf(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){k("MemoryPersistence","Starting transaction:",t);const i=new Of(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(t,e){return P.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class Of extends gd{constructor(t){super(),this.currentSequenceNumber=t}}class Bs{constructor(t){this.persistence=t,this.Jr=new Us,this.Yr=null}static Zr(t){return new Bs(t)}get Xr(){if(this.Yr)return this.Yr;throw M()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),P.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,r=>{const i=O.fromPath(r);return this.ei(t,i).next(o=>{o||e.removeEntry(i,L.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return P.or([()=>P.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=i}static Wi(t,e){let r=U(),i=U();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new qs(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Fu()?8:_d(Mu())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Mf;return this.Xi(t,e,a).next(u=>{if(o.result=u,this.zi)return this.es(t,e,a,u.size)})}).next(()=>o.result)}es(t,e,r,i){return r.documentReadCount<this.ji?(Ze()<=$.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",_e(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(Ze()<=$.DEBUG&&k("QueryEngine","Query:",_e(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ze()<=$.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",_e(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Nt(e))):P.resolve())}Yi(t,e){if(jo(e))return P.resolve(null);let r=Nt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=gs(e,null,"F"),r=Nt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=U(...o);return this.Ji.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const m=this.ts(e,u);return this.ns(e,m,a,h.readTime)?this.Yi(t,gs(e,null,"F")):this.rs(t,m,e,h)}))})))}Zi(t,e,r,i){return jo(e)||i.isEqual(L.min())?P.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,i)?P.resolve(null):(Ze()<=$.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_e(e)),this.rs(t,a,e,dd(i,-1)).next(u=>u))})}ts(t,e){let r=new ht($a(t));return e.forEach((i,o)=>{fr(t,o)&&(r=r.add(o))}),r}ns(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(t,e,r){return Ze()<=$.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",_e(e)),this.Ji.getDocumentsMatchingQuery(t,e,Gt.min(),r)}rs(t,e,r,i){return this.Ji.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t,e,r,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new J(H),this._s=new ke(o=>Vs(o),Ds),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Rf(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Uf(n,t,e,r){return new Ff(n,t,e,r)}async function hl(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=U();for(const m of i){a.push(m.batchId);for(const g of m.mutations)h=h.add(g.key)}for(const m of o){u.push(m.batchId);for(const g of m.mutations)h=h.add(g.key)}return e.localDocuments.getDocuments(r,h).next(m=>({hs:m,removedBatchIds:a,addedBatchIds:u}))})})}function Bf(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(u,h,m,g){const x=m.batch,b=x.keys();let C=P.resolve();return b.forEach(V=>{C=C.next(()=>g.getEntry(h,V)).next(j=>{const N=m.docVersions.get(V);G(N!==null),j.version.compareTo(N)<0&&(x.applyToRemoteDocument(j,m),j.isValidDocument()&&(j.setReadTime(m.commitVersion),g.addEntry(j)))})}),C.next(()=>u.mutationQueue.removeMutationBatch(h,x))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=U();for(let m=0;m<u.mutationResults.length;++m)u.mutationResults[m].transformResults.length>0&&(h=h.add(u.batch.mutations[m].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function dl(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function qf(n,t){const e=F(n),r=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const u=[];t.targetChanges.forEach((g,x)=>{const b=i.get(x);if(!b)return;u.push(e.Ur.removeMatchingKeys(o,g.removedDocuments,x).next(()=>e.Ur.addMatchingKeys(o,g.addedDocuments,x)));let C=b.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(x)!==null?C=C.withResumeToken(dt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):g.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(g.resumeToken,r)),i=i.insert(x,C),function(j,N,B){return j.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(b,C,g)&&u.push(e.Ur.updateTargetData(o,C))});let h=Ft(),m=U();if(t.documentUpdates.forEach(g=>{t.resolvedLimboDocuments.has(g)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))}),u.push(zf(o,a,t.documentUpdates).next(g=>{h=g.Ps,m=g.Is})),!r.isEqual(L.min())){const g=e.Ur.getLastRemoteSnapshotVersion(o).next(x=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(g)}return P.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,m)).next(()=>h)}).then(o=>(e.os=i,o))}function zf(n,t,e){let r=U(),i=U();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Ft();return e.forEach((u,h)=>{const m=o.get(u);h.isFoundDocument()!==m.isFoundDocument()&&(i=i.add(u)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!m.isValidDocument()||h.version.compareTo(m.version)>0||h.version.compareTo(m.version)===0&&m.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):k("LocalStore","Ignoring outdated watch update for ",u,". Current version:",m.version," Watch version:",h.version)}),{Ps:a,Is:i}})}function $f(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Wf(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Ur.getTargetData(r,t).next(o=>o?(i=o,P.resolve(i)):e.Ur.allocateTargetId(r).next(a=>(i=new $t(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function ws(n,t,e){const r=F(n),i=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!En(a))throw a;k("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function Ho(n,t,e){const r=F(n);let i=L.min(),o=U();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,m,g){const x=F(h),b=x._s.get(g);return b!==void 0?P.resolve(x.os.get(b)):x.Ur.getTargetData(m,g)}(r,a,Nt(t)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?i:L.min(),e?o:U())).next(u=>(Hf(r,jd(t),u),{documents:u,Ts:o})))}function Hf(n,t,e){let r=n.us.get(t)||L.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class Ko{constructor(){this.activeTargetIds=Bd()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Kf{constructor(){this.so=new Ko,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Ko,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kn=null;function Jr(){return Kn===null?Kn=function(){return 268435456+Math.round(2147483648*Math.random())}():Kn++,"0x"+Kn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class Xf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(e,r,i,o,a){const u=Jr(),h=this.xo(e,r.toUriEncodedString());k("RestConnection",`Sending RPC '${e}' ${u}:`,h,i);const m={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(m,o,a),this.No(e,h,m,i).then(g=>(k("RestConnection",`Received RPC '${e}' ${u}: `,g),g),g=>{throw Ie("RestConnection",`RPC '${e}' ${u} failed with error: `,g,"url: ",h,"request:",i),g})}Lo(e,r,i,o,a,u){return this.Mo(e,r,i,o,a)}Oo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ne}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const i=Qf[e];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,i){const o=Jr();return new Promise((a,u)=>{const h=new ba;h.setWithCredentials(!0),h.listenOnce(Ra.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Gn.NO_ERROR:const g=h.getResponseJson();k(_t,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(g)),a(g);break;case Gn.TIMEOUT:k(_t,`RPC '${t}' ${o} timed out`),u(new D(R.DEADLINE_EXCEEDED,"Request time out"));break;case Gn.HTTP_ERROR:const x=h.getStatus();if(k(_t,`RPC '${t}' ${o} failed with status:`,x,"response text:",h.getResponseText()),x>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const C=b==null?void 0:b.error;if(C&&C.status&&C.message){const V=function(N){const B=N.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(B)>=0?B:R.UNKNOWN}(C.status);u(new D(V,C.message))}else u(new D(R.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new D(R.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{k(_t,`RPC '${t}' ${o} completed.`)}});const m=JSON.stringify(i);k(_t,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",m,r,15)})}Bo(t,e,r){const i=Jr(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Sa(),u=Pa(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(h.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const g=o.join("");k(_t,`Creating RPC '${t}' stream ${i}: ${g}`,h);const x=a.createWebChannel(g,h);let b=!1,C=!1;const V=new Yf({Io:N=>{C?k(_t,`Not sending because RPC '${t}' stream ${i} is closed:`,N):(b||(k(_t,`Opening RPC '${t}' stream ${i} transport.`),x.open(),b=!0),k(_t,`RPC '${t}' stream ${i} sending:`,N),x.send(N))},To:()=>x.close()}),j=(N,B,z)=>{N.listen(B,K=>{try{z(K)}catch(tt){setTimeout(()=>{throw tt},0)}})};return j(x,tn.EventType.OPEN,()=>{C||(k(_t,`RPC '${t}' stream ${i} transport opened.`),V.yo())}),j(x,tn.EventType.CLOSE,()=>{C||(C=!0,k(_t,`RPC '${t}' stream ${i} transport closed`),V.So())}),j(x,tn.EventType.ERROR,N=>{C||(C=!0,Ie(_t,`RPC '${t}' stream ${i} transport errored:`,N),V.So(new D(R.UNAVAILABLE,"The operation could not be completed")))}),j(x,tn.EventType.MESSAGE,N=>{var B;if(!C){const z=N.data[0];G(!!z);const K=z,tt=K.error||((B=K[0])===null||B===void 0?void 0:B.error);if(tt){k(_t,`RPC '${t}' stream ${i} received error:`,tt);const Tt=tt.status;let nt=function(y){const v=rt[y];if(v!==void 0)return el(v)}(Tt),T=tt.message;nt===void 0&&(nt=R.INTERNAL,T="Unknown error status: "+Tt+" with message "+tt.message),C=!0,V.So(new D(nt,T)),x.close()}else k(_t,`RPC '${t}' stream ${i} received:`,z),V.bo(z)}}),j(u,Ca.STAT_EVENT,N=>{N.stat===us.PROXY?k(_t,`RPC '${t}' stream ${i} detected buffering proxy`):N.stat===us.NOPROXY&&k(_t,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function Zr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(n){return new af(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t,e,r=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-r);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,e,r,i,o,a,u,h){this.ui=t,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new fl(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===R.RESOURCE_EXHAUSTED?(Lt(e.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===e&&this.P_(r,i)},r=>{t(()=>{const i=new D(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return k("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jf extends ml{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=uf(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Dt(a.readTime):L.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Es(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=ms(h)?{documents:ff(o,h)}:{query:mf(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=sl(o,a.resumeToken);const m=_s(o,a.expectedCount);m!==null&&(u.expectedCount=m)}else if(a.snapshotVersion.compareTo(L.min())>0){u.readTime=or(o,a.snapshotVersion.toTimestamp());const m=_s(o,a.expectedCount);m!==null&&(u.expectedCount=m)}return u}(this.serializer,t);const r=gf(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Es(this.serializer),e.removeTarget=t,this.a_(e)}}class Zf extends ml{constructor(t,e,r,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return G(!!t.streamToken),this.lastStreamToken=t.streamToken,G(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){G(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=df(t.writeResults,t.commitTime),r=Dt(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=Es(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>hf(this.serializer,r))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new D(R.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,ys(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(R.UNKNOWN,o.toString())})}Lo(t,e,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(t,ys(e,r),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(R.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class em{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Lt(e),this.D_=!1):k("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{he(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(h){const m=F(h);m.L_.add(4),await In(m),m.q_.set("Unknown"),m.L_.delete(4),await yr(m)}(this))})}),this.q_=new em(r,i)}}async function yr(n){if(he(n))for(const t of n.B_)await t(!0)}async function In(n){for(const t of n.B_)await t(!1)}function pl(n,t){const e=F(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Hs(e)?Ws(e):je(e).r_()&&$s(e,t))}function zs(n,t){const e=F(n),r=je(e);e.N_.delete(t),r.r_()&&gl(e,t),e.N_.size===0&&(r.r_()?r.o_():he(e)&&e.q_.set("Unknown"))}function $s(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}je(n).A_(t)}function gl(n,t){n.Q_.xe(t),je(n).R_(t)}function Ws(n){n.Q_=new nf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),je(n).start(),n.q_.v_()}function Hs(n){return he(n)&&!je(n).n_()&&n.N_.size>0}function he(n){return F(n).L_.size===0}function _l(n){n.Q_=void 0}async function rm(n){n.q_.set("Online")}async function sm(n){n.N_.forEach((t,e)=>{$s(n,t)})}async function im(n,t){_l(n),Hs(n)?(n.q_.M_(t),Ws(n)):n.q_.set("Unknown")}async function om(n,t,e){if(n.q_.set("Online"),t instanceof rl&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const u of o.targetIds)i.N_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.N_.delete(u),i.Q_.removeTarget(u))}(n,t)}catch(r){k("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ar(n,r)}else if(t instanceof Xn?n.Q_.Ke(t):t instanceof nl?n.Q_.He(t):n.Q_.We(t),!e.isEqual(L.min()))try{const r=await dl(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.Q_.rt(a);return u.targetChanges.forEach((h,m)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.N_.get(m);g&&o.N_.set(m,g.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,m)=>{const g=o.N_.get(h);if(!g)return;o.N_.set(h,g.withResumeToken(dt.EMPTY_BYTE_STRING,g.snapshotVersion)),gl(o,h);const x=new $t(g.target,h,m,g.sequenceNumber);$s(o,x)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){k("RemoteStore","Failed to raise snapshot:",r),await ar(n,r)}}async function ar(n,t,e){if(!En(t))throw t;n.L_.add(1),await In(n),n.q_.set("Offline"),e||(e=()=>dl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await yr(n)})}function yl(n,t){return t().catch(e=>ar(n,e,t))}async function vr(n){const t=F(n),e=Yt(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;am(t);)try{const i=await $f(t.localStore,r);if(i===null){t.O_.length===0&&e.o_();break}r=i.batchId,lm(t,i)}catch(i){await ar(t,i)}vl(t)&&El(t)}function am(n){return he(n)&&n.O_.length<10}function lm(n,t){n.O_.push(t);const e=Yt(n);e.r_()&&e.V_&&e.m_(t.mutations)}function vl(n){return he(n)&&!Yt(n).n_()&&n.O_.length>0}function El(n){Yt(n).start()}async function cm(n){Yt(n).p_()}async function um(n){const t=Yt(n);for(const e of n.O_)t.m_(e.mutations)}async function hm(n,t,e){const r=n.O_.shift(),i=Ms.from(r,t,e);await yl(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await vr(n)}async function dm(n,t){t&&Yt(n).V_&&await async function(r,i){if(function(a){return Zd(a)&&a!==R.ABORTED}(i.code)){const o=r.O_.shift();Yt(r).s_(),await yl(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await vr(r)}}(n,t),vl(n)&&El(n)}async function Qo(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const r=he(e);e.L_.add(3),await In(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await yr(e)}async function fm(n,t){const e=F(n);t?(e.L_.delete(2),await yr(e)):t||(e.L_.add(2),await In(e),e.q_.set("Unknown"))}function je(n){return n.K_||(n.K_=function(e,r,i){const o=F(e);return o.w_(),new Jf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:rm.bind(null,n),Ro:sm.bind(null,n),mo:im.bind(null,n),d_:om.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Hs(n)?Ws(n):n.q_.set("Unknown")):(await n.K_.stop(),_l(n))})),n.K_}function Yt(n){return n.U_||(n.U_=function(e,r,i){const o=F(e);return o.w_(),new Zf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:cm.bind(null,n),mo:dm.bind(null,n),f_:um.bind(null,n),g_:hm.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await vr(n)):(await n.U_.stop(),n.O_.length>0&&(k("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ie,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,u=new Ks(t,e,a,i,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(R.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gs(n,t){if(Lt("AsyncQueue",`${t}: ${n}`),En(n))return new D(R.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=en(),this.sortedSet=new J(this.comparator)}static emptySet(t){return new we(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof we)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new we;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this.W_=new J(O.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):M():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ce{constructor(t,e,r,i,o,a,u,h,m){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=m}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Ce(t,e,we.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&dr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class pm{constructor(){this.queries=Xo(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const i=F(e),o=i.queries;i.queries=Xo(),o.forEach((a,u)=>{for(const h of u.j_)h.onError(r)})})(this,new D(R.ABORTED,"Firestore shutting down"))}}function Xo(){return new ke(n=>za(n),dr)}async function gm(n,t){const e=F(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.H_()&&t.J_()&&(r=2):(o=new mm,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(i,!0);break;case 1:o.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const u=Gs(a,`Initialization of query '${_e(t.query)}' failed`);return void t.onError(u)}e.queries.set(i,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Qs(e)}async function _m(n,t){const e=F(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=t.J_()?0:1:!o.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function ym(n,t){const e=F(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const u of a.j_)u.X_(i)&&(r=!0);a.z_=i}}r&&Qs(e)}function vm(n,t,e){const r=F(n),i=r.queries.get(t);if(i)for(const o of i.j_)o.onError(e);r.queries.delete(t)}function Qs(n){n.Y_.forEach(t=>{t.next()})}var Ts,Jo;(Jo=Ts||(Ts={})).ea="default",Jo.Cache="cache";class Em{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Ce(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Ce.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Ts.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t){this.key=t}}class Tl{constructor(t){this.key=t}}class wm{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=U(),this.mutatedKeys=U(),this.Aa=$a(t),this.Ra=new we(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Yo,i=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,u=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,m=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((g,x)=>{const b=i.get(g),C=fr(this.query,x)?x:null,V=!!b&&this.mutatedKeys.has(b.key),j=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let N=!1;b&&C?b.data.isEqual(C.data)?V!==j&&(r.track({type:3,doc:C}),N=!0):this.ga(b,C)||(r.track({type:2,doc:C}),N=!0,(h&&this.Aa(C,h)>0||m&&this.Aa(C,m)<0)&&(u=!0)):!b&&C?(r.track({type:0,doc:C}),N=!0):b&&!C&&(r.track({type:1,doc:b}),N=!0,(h||m)&&(u=!0)),N&&(C?(a=a.add(C),o=j?o.add(g):o.delete(g)):(a=a.delete(g),o=o.delete(g)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),o=o.delete(g.key),r.track({type:1,doc:g})}return{Ra:a,fa:r,ns:u,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((g,x)=>function(C,V){const j=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return j(C)-j(V)}(g.type,x.type)||this.Aa(g.doc,x.doc)),this.pa(r),i=i!=null&&i;const u=e&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,m=h!==this.Ea;return this.Ea=h,a.length!==0||m?{snapshot:new Ce(this.query,t.Ra,o,a,t.mutatedKeys,h===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Yo,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=U(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new Tl(r))}),this.da.forEach(r=>{t.has(r)||e.push(new wl(r))}),e}ba(t){this.Ta=t.Ts,this.da=U();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Ce.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Tm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Im{constructor(t){this.key=t,this.va=!1}}class xm{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new ke(u=>za(u),dr),this.Ma=new Map,this.xa=new Set,this.Oa=new J(O.comparator),this.Na=new Map,this.La=new Us,this.Ba={},this.ka=new Map,this.qa=Re.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Am(n,t,e=!0){const r=Cl(n);let i;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await Il(r,t,e,!0),i}async function bm(n,t){const e=Cl(n);await Il(e,t,!0,!1)}async function Il(n,t,e,r){const i=await Wf(n.localStore,Nt(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await Rm(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&pl(n.remoteStore,i),u}async function Rm(n,t,e,r,i){n.Ka=(x,b,C)=>async function(j,N,B,z){let K=N.view.ma(B);K.ns&&(K=await Ho(j.localStore,N.query,!1).then(({documents:T})=>N.view.ma(T,K)));const tt=z&&z.targetChanges.get(N.targetId),Tt=z&&z.targetMismatches.get(N.targetId)!=null,nt=N.view.applyChanges(K,j.isPrimaryClient,tt,Tt);return ta(j,N.targetId,nt.wa),nt.snapshot}(n,x,b,C);const o=await Ho(n.localStore,t,!0),a=new wm(t,o.Ts),u=a.ma(o.documents),h=Tn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),m=a.applyChanges(u,n.isPrimaryClient,h);ta(n,e,m.wa);const g=new Tm(t,e,a);return n.Fa.set(t,g),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),m.snapshot}async function Cm(n,t,e){const r=F(n),i=r.Fa.get(t),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(a=>!dr(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ws(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&zs(r.remoteStore,i.targetId),Is(r,i.targetId)}).catch(vn)):(Is(r,i.targetId),await ws(r.localStore,i.targetId,!0))}async function Pm(n,t){const e=F(n),r=e.Fa.get(t),i=e.Ma.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),zs(e.remoteStore,r.targetId))}async function Sm(n,t,e){const r=Mm(n);try{const i=await function(a,u){const h=F(a),m=ot.now(),g=u.reduce((C,V)=>C.add(V.key),U());let x,b;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let V=Ft(),j=U();return h.cs.getEntries(C,g).next(N=>{V=N,V.forEach((B,z)=>{z.isValidDocument()||(j=j.add(B))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,V)).next(N=>{x=N;const B=[];for(const z of u){const K=Gd(z,x.get(z.key).overlayedDocument);K!=null&&B.push(new ue(z.key,K,ja(K.value.mapValue),Vt.exists(!0)))}return h.mutationQueue.addMutationBatch(C,m,B,u)}).next(N=>{b=N;const B=N.applyToLocalDocumentSet(x,j);return h.documentOverlayCache.saveOverlays(C,N.batchId,B)})}).then(()=>({batchId:b.batchId,changes:Ha(x)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,h){let m=a.Ba[a.currentUser.toKey()];m||(m=new J(H)),m=m.insert(u,h),a.Ba[a.currentUser.toKey()]=m}(r,i.batchId,e),await xn(r,i.changes),await vr(r.remoteStore)}catch(i){const o=Gs(i,"Failed to persist write");e.reject(o)}}async function xl(n,t){const e=F(n);try{const r=await qf(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Na.get(o);a&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?G(a.va):i.removedDocuments.size>0&&(G(a.va),a.va=!1))}),await xn(e,r,t)}catch(r){await vn(r)}}function Zo(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Fa.forEach((o,a)=>{const u=a.view.Z_(t);u.snapshot&&i.push(u.snapshot)}),function(a,u){const h=F(a);h.onlineState=u;let m=!1;h.queries.forEach((g,x)=>{for(const b of x.j_)b.Z_(u)&&(m=!0)}),m&&Qs(h)}(r.eventManager,t),i.length&&r.Ca.d_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Nm(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Na.get(t),o=i&&i.key;if(o){let a=new J(O.comparator);a=a.insert(o,vt.newNoDocument(o,L.min()));const u=U().add(o),h=new gr(L.min(),new Map,new J(H),a,u);await xl(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),Ys(r)}else await ws(r.localStore,t,!1).then(()=>Is(r,t,e)).catch(vn)}async function Vm(n,t){const e=F(n),r=t.batch.batchId;try{const i=await Bf(e.localStore,t);bl(e,r,null),Al(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await xn(e,i)}catch(i){await vn(i)}}async function Dm(n,t,e){const r=F(n);try{const i=await function(a,u){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let g;return h.mutationQueue.lookupMutationBatch(m,u).next(x=>(G(x!==null),g=x.keys(),h.mutationQueue.removeMutationBatch(m,x))).next(()=>h.mutationQueue.performConsistencyCheck(m)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(m,g,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,g)).next(()=>h.localDocuments.getDocuments(m,g))})}(r.localStore,t);bl(r,t,e),Al(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await xn(r,i)}catch(i){await vn(i)}}function Al(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function bl(n,t,e){const r=F(n);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function Is(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||Rl(n,r)})}function Rl(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(zs(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Ys(n))}function ta(n,t,e){for(const r of e)r instanceof wl?(n.La.addReference(r.key,t),km(n,r)):r instanceof Tl?(k("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||Rl(n,r.key)):M()}function km(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(k("SyncEngine","New document in limbo: "+e),n.xa.add(r),Ys(n))}function Ys(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new O(X.fromString(t)),r=n.qa.next();n.Na.set(r,new Im(e)),n.Oa=n.Oa.insert(e,r),pl(n.remoteStore,new $t(Nt(ks(e.path)),r,"TargetPurposeLimboResolution",Cs.oe))}}async function xn(n,t,e){const r=F(n),i=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((u,h)=>{a.push(r.Ka(h,t,e).then(m=>{var g;if((m||e)&&r.isPrimaryClient){const x=m?!m.fromCache:(g=e==null?void 0:e.targetChanges.get(h.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(h.targetId,x?"current":"not-current")}if(m){i.push(m);const x=qs.Wi(h.targetId,m);o.push(x)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(h,m){const g=F(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",x=>P.forEach(m,b=>P.forEach(b.$i,C=>g.persistence.referenceDelegate.addReference(x,b.targetId,C)).next(()=>P.forEach(b.Ui,C=>g.persistence.referenceDelegate.removeReference(x,b.targetId,C)))))}catch(x){if(!En(x))throw x;k("LocalStore","Failed to update sequence numbers: "+x)}for(const x of m){const b=x.targetId;if(!x.fromCache){const C=g.os.get(b),V=C.snapshotVersion,j=C.withLastLimboFreeSnapshotVersion(V);g.os=g.os.insert(b,j)}}}(r.localStore,o))}async function jm(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){k("SyncEngine","User change. New user:",t.toKey());const r=await hl(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(u=>{u.forEach(h=>{h.reject(new D(R.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await xn(e,r.hs)}}function Om(n,t){const e=F(n),r=e.Na.get(t);if(r&&r.va)return U().add(r.key);{let i=U();const o=e.Ma.get(t);if(!o)return i;for(const a of o){const u=e.Fa.get(a);i=i.unionWith(u.view.Va)}return i}}function Cl(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=xl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Om.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Nm.bind(null,t),t.Ca.d_=ym.bind(null,t.eventManager),t.Ca.$a=vm.bind(null,t.eventManager),t}function Mm(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Vm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Dm.bind(null,t),t}class lr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=_r(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Uf(this.persistence,new Lf,t.initialUser,this.serializer)}Ga(t){return new jf(Bs.Zr,this.serializer)}Wa(t){return new Kf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lr.provider={build:()=>new lr};class xs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jm.bind(null,this.syncEngine),await fm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new pm}()}createDatastore(t){const e=_r(t.databaseInfo.databaseId),r=function(o){return new Xf(o)}(t.databaseInfo);return function(o,a,u,h){return new tm(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,u){return new nm(r,i,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Zo(this.syncEngine,e,0),function(){return Go.D()?new Go:new Gf}())}createSyncEngine(t,e){return function(i,o,a,u,h,m,g){const x=new xm(i,o,a,u,h,m);return g&&(x.Qa=!0),x}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=F(i);k("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await In(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}xs.provider={build:()=>new xs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Lt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=Va.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{k("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(k("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ie;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Gs(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ts(n,t){n.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await hl(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ea(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Um(n);k("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Qo(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Qo(t.remoteStore,i)),n._onlineComponents=t}async function Um(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await ts(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===R.FAILED_PRECONDITION||i.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Ie("Error using user provided cache. Falling back to memory cache: "+e),await ts(n,new lr)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await ts(n,new lr);return n._offlineComponents}async function Pl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await ea(n,n._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await ea(n,new xs))),n._onlineComponents}function Bm(n){return Pl(n).then(t=>t.syncEngine)}async function na(n){const t=await Pl(n),e=t.eventManager;return e.onListen=Am.bind(null,t.syncEngine),e.onUnlisten=Cm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=bm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Pm.bind(null,t.syncEngine),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(n,t,e){if(!e)throw new D(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function qm(n,t,e,r){if(t===!0&&r===!0)throw new D(R.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function sa(n){if(!O.isDocumentKey(n))throw new D(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ia(n){if(O.isDocumentKey(n))throw new D(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Er(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function Te(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new D(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Er(n);throw new D(R.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new D(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new D(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}qm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class wr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oa({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oa(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rd;switch(r.type){case"firstParty":return new ad(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ra.get(e);r&&(k("ComponentProvider","Removing Datastore"),ra.delete(e),r.terminate())}(this),Promise.resolve()}}function zm(n,t,e,r={}){var i;const o=(n=Te(n,wr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Ie("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=yt.MOCK_USER;else{u=Ou(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new D(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new yt(m)}n._authCredentials=new sd(new Na(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new de(this.firestore,t,this._query)}}class bt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bt(this.firestore,t,this._key)}}class Kt extends de{constructor(t,e,r){super(t,e,ks(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bt(this.firestore,null,new O(t))}withConverter(t){return new Kt(this.firestore,t,this._path)}}function aa(n,t,...e){if(n=oe(n),Nl("collection","path",t),n instanceof wr){const r=X.fromString(t,...e);return ia(r),new Kt(n,null,r)}{if(!(n instanceof bt||n instanceof Kt))throw new D(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return ia(r),new Kt(n.firestore,null,r)}}function Vl(n,t,...e){if(n=oe(n),arguments.length===1&&(t=Va.newId()),Nl("doc","path",t),n instanceof wr){const r=X.fromString(t,...e);return sa(r),new bt(n,null,new O(r))}{if(!(n instanceof bt||n instanceof Kt))throw new D(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return sa(r),new bt(n.firestore,n instanceof Kt?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new fl(this,"async_queue_retry"),this.Vu=()=>{const r=Zr();r&&k("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=Zr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Zr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new ie;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!En(t))throw t;k("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw Lt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=Ks.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&M()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function ca(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}class yn extends wr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new la,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new la(t),this._firestoreClient=void 0,await t}}}function $m(n,t){const e=typeof n=="object"?n:Wh(),r=typeof n=="string"?n:t||"(default)",i=Bh(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=ku("firestore");o&&zm(i,...o)}return i}function Dl(n){if(n._terminated)throw new D(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Wm(n),n._firestoreClient}function Wm(n){var t,e,r;const i=n._freezeSettings(),o=function(u,h,m,g){return new Ed(u,h,m,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,Sl(g.experimentalLongPollingOptions),g.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Fm(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pe(dt.fromBase64String(t))}catch(e){throw new D(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Pe(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return H(this._lat,t._lat)||H(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=/^__.*__$/;class Km{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ue(t,this.data,this.fieldMask,e,this.fieldTransforms):new wn(t,this.data,e,this.fieldTransforms)}}function jl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class ti{constructor(t,e,r,i,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new ti(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.Ou(t),i}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return cr(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(jl(this.Cu)&&Hm.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Gm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||_r(t)}Qu(t,e,r,i=!1){return new ti({Cu:t,methodName:e,qu:r,path:ut.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ol(n){const t=n._freezeSettings(),e=_r(n._databaseId);return new Gm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Qm(n,t,e,r,i,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,i);Fl("Data must be an object, but it was:",a,r);const u=Ml(r,a);let h,m;if(o.merge)h=new Pt(a.fieldMask),m=a.fieldTransforms;else if(o.mergeFields){const g=[];for(const x of o.mergeFields){const b=Xm(t,x,e);if(!a.contains(b))throw new D(R.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);Zm(g,b)||g.push(b)}h=new Pt(g),m=a.fieldTransforms.filter(x=>h.covers(x.field))}else h=null,m=a.fieldTransforms;return new Km(new Rt(u),h,m)}function Ym(n,t,e,r=!1){return ei(e,n.Qu(r?4:3,t))}function ei(n,t){if(Ll(n=oe(n)))return Fl("Unsupported field value:",t,n),Ml(n,t);if(n instanceof kl)return function(r,i){if(!jl(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const u of r){let h=ei(u,i.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qd(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ot.fromDate(r);return{timestampValue:or(i.serializer,o)}}if(r instanceof ot){const o=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:or(i.serializer,o)}}if(r instanceof Js)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pe)return{bytesValue:sl(i.serializer,r._byteString)};if(r instanceof bt){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Fs(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Zs)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.Bu("VectorValues must only contain numeric values.");return js(u.serializer,h)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Er(r)}`)}(n,t)}function Ml(n,t){const e={};return Da(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ve(n,(r,i)=>{const o=ei(i,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Ll(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ot||n instanceof Js||n instanceof Pe||n instanceof bt||n instanceof kl||n instanceof Zs)}function Fl(n,t,e){if(!Ll(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Er(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function Xm(n,t,e){if((t=oe(t))instanceof Xs)return t._internalPath;if(typeof t=="string")return Ul(n,t);throw cr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Jm=new RegExp("[~\\*/\\[\\]]");function Ul(n,t,e){if(t.search(Jm)>=0)throw cr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Xs(...t.split("."))._internalPath}catch{throw cr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function cr(n,t,e,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new D(R.INVALID_ARGUMENT,u+n+h)}function Zm(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new tp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ni("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class tp extends Bl{data(){return super.data()}}function ni(n,t){return typeof t=="string"?Ul(n,t):t instanceof Xs?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ri{}class ql extends ri{}function np(n,t,...e){let r=[];t instanceof ri&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof ii).length,u=o.filter(h=>h instanceof si).length;if(a>1||a>0&&u>0)throw new D(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class si extends ql{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new si(t,e,r)}_apply(t){const e=this._parse(t);return zl(t._query,e),new de(t.firestore,t.converter,ps(t._query,e))}_parse(t){const e=Ol(t.firestore);return function(o,a,u,h,m,g,x){let b;if(m.isKeyField()){if(g==="array-contains"||g==="array-contains-any")throw new D(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${g}' queries on documentId().`);if(g==="in"||g==="not-in"){ha(x,g);const C=[];for(const V of x)C.push(ua(h,o,V));b={arrayValue:{values:C}}}else b=ua(h,o,x)}else g!=="in"&&g!=="not-in"&&g!=="array-contains-any"||ha(x,g),b=Ym(u,a,x,g==="in"||g==="not-in");return it.create(m,g,b)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class ii extends ri{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ii(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:St.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let a=i;const u=o.getFlattenedFilters();for(const h of u)zl(a,h),a=ps(a,h)}(t._query,e),new de(t.firestore,t.converter,ps(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class oi extends ql{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new oi(t,e)}_apply(t){const e=function(i,o,a){if(i.startAt!==null)throw new D(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new D(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pn(o,a)}(t._query,this._field,this._direction);return new de(t.firestore,t.converter,function(i,o){const a=i.explicitOrderBy.concat([o]);return new De(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function rp(n,t="asc"){const e=t,r=ni("orderBy",n);return oi._create(r,e)}function ua(n,t,e){if(typeof(e=oe(e))=="string"){if(e==="")throw new D(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qa(t)&&e.indexOf("/")!==-1)throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(X.fromString(e));if(!O.isDocumentKey(r))throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Po(n,new O(r))}if(e instanceof bt)return Po(n,e._key);throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Er(e)}.`)}function ha(n,t){if(!Array.isArray(n)||n.length===0)throw new D(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function zl(n,t){const e=function(i,o){for(const a of i)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new D(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class sp{convertValue(t,e="none"){switch(ce(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(le(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ve(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>et(a.doubleValue));return new Zs(o)}convertGeoPoint(t){return new Js(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Ss(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(dn(t));default:return null}}convertTimestamp(t){const e=Qt(t);return new ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);G(ul(r));const i=new fn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return i.isEqual(e)||Lt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class $l extends Bl{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Jn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ni("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Jn extends $l{data(t={}){return super.data(t)}}class op{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new rn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Jn(this._firestore,this._userDataWriter,r.key,r,new rn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const h=new Jn(i._firestore,i._userDataWriter,u.doc.key,u.doc,new rn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new Jn(i._firestore,i._userDataWriter,u.doc.key,u.doc,new rn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let m=-1,g=-1;return u.type!==0&&(m=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),g=a.indexOf(u.doc.key)),{type:ap(u.type),doc:h,oldIndex:m,newIndex:g}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function ap(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class Wl extends sp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new bt(this.firestore,null,e)}}function lp(n){return Hl(Te(n.firestore,yn),[new Os(n._key,Vt.none())])}function cp(n,t){const e=Te(n.firestore,yn),r=Vl(n),i=ip(n.converter,t);return Hl(e,[Qm(Ol(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Vt.exists(!1))]).then(()=>r)}function up(n,...t){var e,r,i;n=oe(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||ca(t[a])||(o=t[a],a++);const u={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(ca(t[a])){const x=t[a];t[a]=(e=x.next)===null||e===void 0?void 0:e.bind(x),t[a+1]=(r=x.error)===null||r===void 0?void 0:r.bind(x),t[a+2]=(i=x.complete)===null||i===void 0?void 0:i.bind(x)}let h,m,g;if(n instanceof bt)m=Te(n.firestore,yn),g=ks(n._key.path),h={next:x=>{t[a]&&t[a](hp(m,n,x))},error:t[a+1],complete:t[a+2]};else{const x=Te(n,de);m=Te(x.firestore,yn),g=x._query;const b=new Wl(m);h={next:C=>{t[a]&&t[a](new op(m,b,x,C))},error:t[a+1],complete:t[a+2]},ep(n._query)}return function(b,C,V,j){const N=new Lm(j),B=new Em(C,N,V);return b.asyncQueue.enqueueAndForget(async()=>gm(await na(b),B)),()=>{N.Za(),b.asyncQueue.enqueueAndForget(async()=>_m(await na(b),B))}}(Dl(m),g,u,h)}function Hl(n,t){return function(r,i){const o=new ie;return r.asyncQueue.enqueueAndForget(async()=>Sm(await Bm(r),i,o)),o.promise}(Dl(n),t)}function hp(n,t,e){const r=e.docs.get(t._key),i=new Wl(n);return new $l(n,i,t._key,r,new rn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Ne=i})($h),er(new cn("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new yn(new id(r.getProvider("auth-internal")),new cd(r.getProvider("app-check-internal")),function(m,g){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new D(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fn(m.options.projectId,g)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Ee(xo,"4.7.3",t),Ee(xo,"4.7.3","esm2017")})();const dp={apiKey:"AIzaSyBWc1Wz4mBz9OkI9zXfLgwnssIW42AQbsA",authDomain:"wccw-app.firebaseapp.com",projectId:"wccw-app",storageBucket:"wccw-app.firebasestorage.app",messagingSenderId:"1065705333108",appId:"1:1065705333108:web:5f04c2dbf43a5bce91cc21",measurementId:"G-M78HQBCH73"},fp=Ta(dp),es=$m(fp),mp=({user:n,onLogin:t,onLogout:e})=>{const[r,i]=st.useState([]),[o,a]=st.useState(!1),[u,h]=st.useState(!1),[m,g]=st.useState(!0),[x,b]=st.useState(null),[C,V]=st.useState(""),[j,N]=st.useState(""),[B,z]=st.useState(""),[K,tt]=st.useState(""),[Tt,nt]=st.useState(""),[T,p]=st.useState(!1);st.useEffect(()=>{try{const E=np(aa(es,"posts"),rp("createdAt","desc")),_=up(E,It=>{const Xt=It.docs.map(An=>({id:An.id,...An.data()}));i(Xt),g(!1),b(null)},It=>{console.error("Firestore Error:",It),b("데이터베이스 연결에 실패했습니다. API 키를 확인해주세요."),g(!1)});return()=>_()}catch(E){console.error("Setup Error:",E),b("Firebase 설정이 올바르지 않습니다."),g(!1)}},[]);const y=E=>{E.preventDefault(),C==="admin"&&j==="Sarang77?"?(t({username:"Admin",isAdmin:!0}),h(!1),z("")):C==="user"&&j==="1234"?(t({username:"Member",isAdmin:!1}),h(!1),z("")):z("아이디 또는 비밀번호가 틀렸습니다.")},v=async E=>{if(E.preventDefault(),!(!K.trim()||!Tt.trim()||!n)){p(!0);try{await cp(aa(es,"posts"),{title:K,content:Tt,author:n.username,date:new Date().toLocaleDateString(),createdAt:Date.now()}),tt(""),nt(""),a(!1)}catch(_){alert("글 작성에 실패했습니다. (권한 문제 혹은 네트워크 오류)"),console.error(_)}finally{p(!1)}}},w=async E=>{if(window.confirm("정말 이 게시글을 삭제하시겠습니까? (Delete this post?)"))try{await lp(Vl(es,"posts",E))}catch(_){alert("삭제에 실패했습니다."),console.error(_)}};return f.jsxs("div",{className:"pb-24 px-6 pt-8 bg-gray-50 min-h-screen",children:[f.jsxs("div",{className:"flex justify-between items-start mb-6",children:[f.jsxs("div",{children:[f.jsx("h1",{className:"text-2xl font-serif font-bold text-gray-900 mb-1",children:"나눔터"}),f.jsx("h2",{className:"text-sm font-serif text-gray-600 uppercase tracking-widest",children:"Community Board"})]}),f.jsx("div",{children:n?f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("span",{className:"text-xs text-wccw-purple font-bold flex items-center gap-1",children:[f.jsx(Yc,{size:12})," ",n.username]}),f.jsx("button",{onClick:e,className:"bg-gray-200 p-2 rounded-full text-gray-600 hover:bg-gray-300 transition-colors",title:"로그아웃",children:f.jsx(Xc,{size:16})})]}):f.jsxs("button",{onClick:()=>h(!0),className:"bg-wccw-purple text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-purple-800 transition-colors shadow-sm",children:[f.jsx(Jc,{size:14})," 로그인 (Login)"]})})]}),x&&f.jsxs("div",{className:"bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl mb-6 flex items-start gap-3 text-sm",children:[f.jsx(Zc,{className:"shrink-0 mt-0.5",size:16}),f.jsxs("div",{children:[f.jsx("p",{className:"font-bold",children:"연결 오류"}),f.jsx("p",{children:x}),f.jsx("p",{className:"text-xs mt-1 text-red-400",children:"firebaseConfig.ts 파일에 유효한 API Key를 입력했는지 확인해주세요."})]})]}),o?f.jsxs("div",{className:"bg-white p-5 rounded-xl shadow-md border border-purple-100 mb-6 animate-fade-in",children:[f.jsxs("div",{className:"flex justify-between items-center mb-4",children:[f.jsx("h3",{className:"font-bold text-gray-800",children:"글쓰기 (Write Post)"}),f.jsx("button",{onClick:()=>a(!1),className:"text-gray-400 hover:text-gray-600",children:f.jsx(co,{size:20})})]}),f.jsxs("form",{onSubmit:v,className:"space-y-4",children:[f.jsx("input",{type:"text",placeholder:"제목 (Title)",className:"w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-wccw-purple focus:ring-1 focus:ring-wccw-purple",value:K,onChange:E=>tt(E.target.value),required:!0}),f.jsx("textarea",{placeholder:"내용을 입력하세요... (Content)",className:"w-full border border-gray-200 rounded-lg p-3 text-sm h-32 focus:outline-none focus:border-wccw-purple focus:ring-1 focus:ring-wccw-purple resize-none",value:Tt,onChange:E=>nt(E.target.value),required:!0}),f.jsxs("button",{type:"submit",disabled:T,className:"w-full bg-wccw-purple text-white py-3 rounded-lg font-bold text-sm hover:bg-purple-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50",children:[T&&f.jsx(uo,{size:16,className:"animate-spin"}),T?"등록 중...":"등록하기 (Post)"]})]})]}):f.jsxs("button",{onClick:()=>n?a(!0):h(!0),disabled:!!x,className:"w-full bg-white border border-dashed border-wccw-purple text-wccw-purple p-4 rounded-xl mb-6 flex items-center justify-center gap-2 hover:bg-purple-50 transition-colors font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed",children:[f.jsx(tu,{size:16})," 글쓰기 (Write a Post)"]}),u&&f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",children:f.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl animate-fade-in relative",children:[f.jsx("button",{onClick:()=>{h(!1),z("")},className:"absolute top-4 right-4 text-gray-400 hover:text-gray-600",children:f.jsx(co,{size:20})}),f.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-1 text-center",children:"로그인"}),f.jsx("p",{className:"text-xs text-gray-500 text-center mb-6",children:"Login to write posts"}),f.jsxs("form",{onSubmit:y,className:"space-y-4",children:[f.jsx("div",{children:f.jsx("input",{type:"text",placeholder:"아이디 (ID)",className:"w-full border border-gray-300 rounded-lg p-3 text-sm",value:C,onChange:E=>V(E.target.value)})}),f.jsx("div",{children:f.jsx("input",{type:"password",placeholder:"비밀번호 (Password)",className:"w-full border border-gray-300 rounded-lg p-3 text-sm",value:j,onChange:E=>N(E.target.value)})}),B&&f.jsx("p",{className:"text-xs text-red-500 text-center",children:B}),f.jsx("button",{type:"submit",className:"w-full bg-wccw-purple text-white py-3 rounded-lg font-bold hover:bg-purple-800",children:"로그인"}),f.jsxs("div",{className:"bg-gray-100 p-3 rounded-lg text-[10px] text-gray-500 text-center",children:[f.jsx("span",{className:"font-bold",children:"Test Accounts:"}),f.jsx("br",{}),"User: user / 1234",f.jsx("br",{}),"Admin: admin / Sarang77?"]})]})]})}),f.jsx("div",{className:"space-y-4",children:m&&r.length===0?f.jsx("div",{className:"flex justify-center py-10",children:f.jsx(uo,{className:"animate-spin text-wccw-purple",size:32})}):f.jsxs(f.Fragment,{children:[r.map(E=>f.jsxs("div",{className:"bg-white p-5 rounded-xl shadow-sm border border-gray-100 relative group animate-fade-in",children:[((n==null?void 0:n.isAdmin)||(n==null?void 0:n.username)===E.author)&&f.jsx("button",{onClick:()=>w(E.id),className:"absolute top-4 right-4 text-gray-300 hover:text-red-500 p-1",children:f.jsx(eu,{size:16})}),f.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[f.jsx("span",{className:"bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded-full font-bold",children:E.author}),f.jsx("span",{className:"text-[10px] text-gray-400",children:E.date})]}),f.jsx("h3",{className:"font-bold text-gray-800 mb-2",children:E.title}),f.jsx("p",{className:"text-sm text-gray-600 whitespace-pre-line leading-relaxed",children:E.content})]},E.id)),r.length===0&&!x&&f.jsx("div",{className:"text-center py-10 text-gray-400",children:f.jsxs("p",{children:["등록된 게시글이 없습니다.",f.jsx("br",{}),"가장 먼저 평화의 메시지를 남겨보세요."]})})]})})]})},pp=()=>{const[n,t]=st.useState(At.HOME),[e,r]=st.useState(null),i=u=>{r(u)},o=()=>{r(null)},a=()=>{switch(n){case At.HOME:return f.jsx(fo,{onNavigate:t});case At.ABOUT:return f.jsx(Eu,{});case At.HISTORY:return f.jsx(Iu,{});case At.COMMUNITY:return f.jsx(mp,{user:e,onLogin:i,onLogout:o});case At.DONATE:return f.jsx(xu,{});default:return f.jsx(fo,{onNavigate:t})}};return f.jsxs("div",{className:"min-h-screen bg-gray-50 text-gray-900 font-sans antialiased max-w-md mx-auto relative shadow-2xl overflow-hidden",children:[f.jsxs("header",{className:"sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-3 flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("div",{className:"w-8 h-8 bg-wccw-purple rounded-lg flex items-center justify-center text-white font-bold text-xs",children:"W"}),f.jsx("span",{className:"font-serif font-bold text-gray-800",children:"WCCW"})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[e&&f.jsxs("span",{className:"text-[10px] text-wccw-purple font-bold",children:[e.isAdmin?"Admin":"User"," Mode"]}),f.jsx("div",{className:"text-[10px] bg-gray-100 px-2 py-1 rounded-full text-gray-500 font-medium",children:"Mobile Ver."})]})]}),f.jsx("main",{className:"animate-fade-in",children:a()}),f.jsx(vu,{currentView:n,onNavigate:t})]})},Kl=document.getElementById("root");if(!Kl)throw new Error("Could not find root element to mount to");const gp=rs.createRoot(Kl);gp.render(f.jsx(Cc.StrictMode,{children:f.jsx(pp,{})}));

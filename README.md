
# WCCW - Washington DC Coalition for Comfort Women Mobile App

워싱턴 정신대대책위원회(WCCW)를 위한 역사 교육 및 커뮤니티 모바일 어플리케이션입니다.

## 주요 기능 (Features)
- **Home**: 최신 소식 및 활동 공유
- **About**: 단체 미션 및 주요 활동 소개
- **History**: 타임라인 및 증언을 통한 역사 교육
- **AI History Tutor**: Gemini AI를 활용한 실시간 역사 Q&A 도우미
- **Community**: Firebase 기반의 평화 메시지 게시판
- **Donate**: 후원 안내 및 통계

## 기술 스택 (Tech Stack)
- **Frontend**: React, TypeScript, Tailwind CSS, Lucide Icons
- **Backend/DB**: Firebase Firestore
- **AI**: Google Gemini API (gemini-3-flash-preview)
- **Mobile Wrapper**: Capacitor (iOS/Android 대응 가능)
- **Build Tool**: Vite

## 설치 및 실행 방법 (Getting Started)

### 1. 사전 준비
- Node.js 설치
- Firebase 프로젝트 생성 및 Firestore 활성화

### 2. 환경 설정
`firebaseConfig.ts` 파일에 본인의 Firebase 설정값을 입력하세요.
Vite 환경 변수 혹은 `vite.config.ts`에 Gemini API Key(`API_KEY`)가 설정되어 있어야 AI 기능이 작동합니다.

### 3. 로컬 실행
```bash
npm install
npm run dev
```

### 4. 안드로이드 빌드 (Capacitor)
```bash
npm run android:sync
npm run android:open
```

## 라이선스
© 2024 Washington DC Coalition for Comfort Women. All rights reserved.

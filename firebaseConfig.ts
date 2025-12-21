import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/**
 * ⚠️ 필독: Firebase 콘솔의 '프로젝트 설정 > 내 앱'에서 복사한 
 * firebaseConfig 객체 내용을 아래에 붙여넣으세요.
 */
const firebaseConfig = {
  apiKey: "AIzaSyBWc1Wz4mBz9OkI9zXfLgwnssIW42AQbsA",
  authDomain: "wccw-app.firebaseapp.com",
  projectId: "wccw-app",
  storageBucket: "wccw-app.firebasestorage.app",
  messagingSenderId: "1065705333108",
  appId: "1:1065705333108:web:5f04c2dbf43a5bce91cc21",
  measurementId: "G-M78HQBCH73"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 데이터베이스 인스턴스 내보내기
export const db = getFirestore(app);
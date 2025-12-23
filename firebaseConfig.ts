import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "AIzaSyBWc1Wz4mBz9OkI9zXfLgwnssIW42AQbsA",
  authDomain: "wccw-app.firebaseapp.com",
  projectId: "wccw-app",
  storageBucket: "wccw-app.firebasestorage.app",
  messagingSenderId: "1065705333108",
  appId: "1:1065705333108:web:5f04c2dbf43a5bce91cc21",
  measurementId: "G-M78HQBCH73"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
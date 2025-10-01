// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn29-aqIg1VB6jr1jKyawlJOV2LDEl0Fo",
  authDomain: "rapsbol.firebaseapp.com",
  projectId: "rapsbol",
  storageBucket: "rapsbol.firebasestorage.app",
  messagingSenderId: "472273089221",
  appId: "1:472273089221:web:fca4b11b76431353e2f6ac",
  measurementId: "G-KFFHK0KV3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

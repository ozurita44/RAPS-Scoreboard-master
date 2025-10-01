// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIWXWl1Y7LFf9gXjvyI_WaCGJiwg2Vuuk",
  authDomain: "raps-points-db.firebaseapp.com",
  projectId: "raps-points-db",
  storageBucket: "raps-points-db.appspot.com",
  messagingSenderId: "39755402475",
  appId: "1:39755402475:web:88c1d437e46f3b6525c2ae",
  measurementId: "G-YTT1JK10CN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

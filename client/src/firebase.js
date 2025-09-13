// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "apti-ground.firebaseapp.com",
  projectId: "apti-ground",
  storageBucket: "apti-ground.firebasestorage.app",
  messagingSenderId: "761470608756",
  appId: "1:761470608756:web:fff9cedb60ed734c81b821"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
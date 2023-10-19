// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-3a4ab.firebaseapp.com",
  projectId: "real-estate-3a4ab",
  storageBucket: "real-estate-3a4ab.appspot.com",
  messagingSenderId: "341825561518",
  appId: "1:341825561518:web:a2322010afb11bec019e3f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

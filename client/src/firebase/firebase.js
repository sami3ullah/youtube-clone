// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "fir-7f833.firebaseapp.com",
  projectId: "fir-7f833",
  storageBucket: "fir-7f833.appspot.com",
  messagingSenderId: "1013124126163",
  appId: "1:1013124126163:web:f2610b18dacf11f85a0b26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export default app;

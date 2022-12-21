import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBLVBs--lDKAnsbJ3PU4xeWr15rFqO7Dcw",
  authDomain: "fir-b0afa.firebaseapp.com",
  projectId: "fir-b0afa",
  storageBucket: "fir-b0afa.appspot.com",
  messagingSenderId: "450363026482",
  appId: "1:450363026482:web:78935bbfb933ad3759602b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider();

export default app;
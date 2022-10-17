// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjRmTz2LygQY3gjxkcdPeCs0VQZKoLLFM",
  authDomain: "fir-exam-24fa4.firebaseapp.com",
  projectId: "fir-exam-24fa4",
  storageBucket: "fir-exam-24fa4.appspot.com",
  messagingSenderId: "226478282090",
  appId: "1:226478282090:web:22f41be0148ab02bb48113",
};

// Initialize Firebase
const app = () => initializeApp(firebaseConfig);
app();
export const db = getFirestore();

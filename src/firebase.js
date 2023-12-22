// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMLxNYCxv9nPP03h8_O8OQQsp9uMPOCPY",
  authDomain: "authentication-project-b4dc7.firebaseapp.com",
  projectId: "authentication-project-b4dc7",
  storageBucket: "authentication-project-b4dc7.appspot.com",
  messagingSenderId: "416299466804",
  appId: "1:416299466804:web:a8b3643aa424278e048a61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth  = getAuth();
export default app;
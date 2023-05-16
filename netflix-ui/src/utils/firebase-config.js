import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD9YxyAQHJ-5bKECbztbUDy6q5WVx-bkUk",
  authDomain: "netflixx-37178.firebaseapp.com",
  projectId: "netflixx-37178",
  storageBucket: "netflixx-37178.appspot.com",
  messagingSenderId: "667157356260",
  appId: "1:667157356260:web:93abeecfb3b6b12e4316f1",
  measurementId: "G-06C11HPGZK"
};
const app = initializeApp(firebaseConfig);
export const  firebaseAuth=getAuth(app);
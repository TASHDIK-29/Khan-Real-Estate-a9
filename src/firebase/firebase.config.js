// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  // apiKey: "AIzaSyDdANE0cPepgKkPhwlcVyHBfR0KFkHw848",
  // authDomain: "khan-real-estate-9b996.firebaseapp.com",
  // projectId: "khan-real-estate-9b996",
  // storageBucket: "khan-real-estate-9b996.appspot.com",
  // messagingSenderId: "302190561159",
  // appId: "1:302190561159:web:ad1026f224fd3e13833522"


  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
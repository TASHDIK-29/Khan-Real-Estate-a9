// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDdANE0cPepgKkPhwlcVyHBfR0KFkHw848",
  authDomain: "khan-real-estate-9b996.firebaseapp.com",
  projectId: "khan-real-estate-9b996",
  storageBucket: "khan-real-estate-9b996.appspot.com",
  messagingSenderId: "302190561159",
  appId: "1:302190561159:web:ad1026f224fd3e13833522"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
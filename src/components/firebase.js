// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmDkSoO8paWGUOeSNqpHa8Lndo1mtucTQ",
  authDomain: "shyftlabsinternoa.firebaseapp.com",
  projectId: "shyftlabsinternoa",
  storageBucket: "shyftlabsinternoa.appspot.com",
  messagingSenderId: "240760673277",
  appId: "1:240760673277:web:d34611525e6750f79e3f94",
  measurementId: "G-HL8QW0EW19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
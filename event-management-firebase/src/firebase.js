// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvNgqElHTgvUOTOfcU4X_p8ug8vQFW-WA",
  authDomain: "eventmanagement-7b8b3.firebaseapp.com",
  projectId: "eventmanagement-7b8b3",
  storageBucket: "eventmanagement-7b8b3.firebasestorage.app",
  messagingSenderId: "904592757319",
  appId: "1:904592757319:web:a9227ba4ed723b5daf9762",
  measurementId: "G-910TMJ3KTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
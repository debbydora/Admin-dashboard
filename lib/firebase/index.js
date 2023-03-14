// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK7wKK8wPmwQbsVnsc4azzPgg7bd-nakw",
  authDomain: "admin-dashboard-b0fb2.firebaseapp.com",
  projectId: "admin-dashboard-b0fb2",
  storageBucket: "admin-dashboard-b0fb2.appspot.com",
  messagingSenderId: "795348139308",
  appId: "1:795348139308:web:a50adf5a41570094134089",
  measurementId: "G-EW62TQJ56J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATmopYrgSAPQXMGQdmUnfBY9yxXxpCptY",
  authDomain: "netflix-9adbf.firebaseapp.com",
  projectId: "netflix-9adbf",
  storageBucket: "netflix-9adbf.appspot.com",
  messagingSenderId: "722137948614",
  appId: "1:722137948614:web:37519b7d802b7721c692c7",
  measurementId: "G-3YK5GSKVNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
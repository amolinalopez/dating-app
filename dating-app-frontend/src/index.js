import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMYbXUKTKoh9BsXaaMPSBu-YfGdQ73_kE",
  authDomain: "dating-app-a7ef5.firebaseapp.com",
  projectId: "dating-app-a7ef5",
  storageBucket: "dating-app-a7ef5.appspot.com",
  messagingSenderId: "589782092154",
  appId: "1:589782092154:web:3d85835b3736ac95f86ec3",
  measurementId: "G-SXS4L5QPEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


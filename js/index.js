// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7nuSzDJVdXFT0mWiQdnY4qwNlLipI8W0",
    authDomain: "mini--book.firebaseapp.com",
    projectId: "mini--book",
    storageBucket: "mini--book.appspot.com",
    messagingSenderId: "1068408838798",
    appId: "1:1068408838798:web:f9af46200e8ce5977bc7df",
    measurementId: "G-PPB54M11ZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
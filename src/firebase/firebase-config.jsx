// src/firebase/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCPOEasB8gqOLMZEb7cvtVtJGNSqU2wNTc",
    authDomain: "autentification-46452.firebaseapp.com",
    projectId: "autentification-46452",
    storageBucket: "autentification-46452.appspot.com",
    messagingSenderId: "733562703160",
    appId: "1:733562703160:web:3e86335306bdbacf7bc5cd",
    measurementId: "G-RHSB8EM5W1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
console.log("Firebase ha sido inicializado", app);

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Replace with your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEnnYFiWG4AP2b-S_BYaR6-JkIJLOb0gM",
    authDomain: "nerdle-eb473.firebaseapp.com",
    projectId: "nerdle-eb473",
    storageBucket: "nerdle-eb473.firebasestorage.app",
    messagingSenderId: "132461398451",
    appId: "1:132461398451:web:bcb7bc7dcca7377a49a3c6",
    measurementId: "G-V8YFN1VERM"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
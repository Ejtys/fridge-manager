import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA4ai1oID_T8IHnZTyvGDryncg9TK7rvY",
  authDomain: "fridge-mana.firebaseapp.com",
  projectId: "fridge-mana",
  storageBucket: "fridge-mana.appspot.com",
  messagingSenderId: "699350662042",
  appId: "1:699350662042:web:faad274d5a15e74d271823",
  measurementId: "G-RZGJ2QEFNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Authentication
const auth = getAuth(app);

export { db, auth };

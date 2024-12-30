// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyB3J5zq81n74SgZy6bmpuUHCoSLDy0XwKo",
  authDomain: "database-e1232.firebaseapp.com",
  projectId: "database-e1232",
  storageBucket: "database-e1232.firebasestorage.app",
  messagingSenderId: "971373400423",
  appId: "1:971373400423:web:757bab04c3b83ca4269fc2",
  measurementId: "G-BQPV05YP10"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Configuração do Authentication

export { db, auth };


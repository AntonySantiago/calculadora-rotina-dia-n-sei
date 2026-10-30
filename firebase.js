
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyCc-HJbOf2oIONbGGaXIX_sR85_-VsZtoI",
  authDomain: "calculadora0ponto2.firebaseapp.com",
  projectId: "calculadora0ponto2",
  storageBucket: "calculadora0ponto2.firebasestorage.app",
  messagingSenderId: "632835640434",
  appId: "1:632835640434:web:8ba5d0fac7fc70ab3386eb",
  measurementId: "G-V8QXTTG2KD"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

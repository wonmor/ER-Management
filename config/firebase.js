// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL38WXeGvn1K898nockxbhSrpJ1PNAUjA",
  authDomain: "er-management-a1639.firebaseapp.com",
  projectId: "er-management-a1639",
  storageBucket: "er-management-a1639.appspot.com",
  messagingSenderId: "991086808768",
  appId: "1:991086808768:web:914c0e744e29344af1a725",
  measurementId: "G-J7C9WCKHWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
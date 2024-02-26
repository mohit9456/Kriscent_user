import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCmpj3DtEP93M5HRwWhAx44ha06RBZk8C4',
  authDomain: "auth-task-cf35e.firebaseapp.com",
  projectId: "auth-task-cf35e",
  storageBucket: "auth-task-cf35e.appspot.com",
  messagingSenderId: "970087236853",
  appId: '1:970087236853:web:ce860ad102d38322f531bc',
  measurementId: "G-W5Y1VQ4K9E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth};
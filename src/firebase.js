/* eslint-disable */ 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBexlwBSpJVuTsnfQD8FR2x9gLh_gqiQ7E",
  authDomain: "kmyfashion-964b9.firebaseapp.com",
  projectId: "kmyfashion-964b9",
  storageBucket: "kmyfashion-964b9.appspot.com",
  messagingSenderId: "74682286543",
  appId: "1:74682286543:web:667d58b56643eb160f52ba",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

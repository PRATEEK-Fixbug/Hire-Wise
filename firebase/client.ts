// Runs in the browser (client-side)
// Responsible for authentication UI flows where users directly interact with Firebase

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "voxnavi-d49ca.firebaseapp.com",
  projectId: "voxnavi-d49ca",
  storageBucket: "voxnavi-d49ca.firebasestorage.app",
  messagingSenderId: "97266897177",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: "G-VC0CHND54T",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const clientAuth = getAuth(app);
export const clientDB = getFirestore(app);

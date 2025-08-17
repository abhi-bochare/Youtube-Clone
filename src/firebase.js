import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7sGZBynetFlnNoICikE6BhRCQjhXE55k",
  authDomain: "clone-9492d.firebaseapp.com",
  projectId: "clone-9492d",
  storageBucket: "clone-9492d.firebasestorage.app",
  messagingSenderId: "554453232699",
  appId: "1:554453232699:web:826cbae1a59bfefb1ec01e",
  measurementId: "G-ZHNW6PXDKF",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYyYLQ7_fOfPMlGc6AcfS2rnx5CXvnHlI",
  authDomain: "amaktech-marketplace-46549.firebaseapp.com",
  databaseURL: "https://amaktech-marketplace-46549-default-rtdb.firebaseio.com",
  projectId: "amaktech-marketplace-46549",
  storageBucket: "amaktech-marketplace-46549.appspot.com",
  messagingSenderId: "201749033752",
  appId: "1:201749033752:web:bef657f4959b96cdb0a46d",
  measurementId: "G-76T577FHL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);  // Export auth instance
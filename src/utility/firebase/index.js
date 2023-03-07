// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  initializeFirestore,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUeAylLdnrQTps90WFYMvbUKMb-F9X7Kc",
  authDomain: "jaygpt-6c248.firebaseapp.com",
  projectId: "jaygpt-6c248",
  storageBucket: "jaygpt-6c248.appspot.com",
  messagingSenderId: "738692645318",
  appId: "1:738692645318:web:ff008dcdb8d4c87f0b72c7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

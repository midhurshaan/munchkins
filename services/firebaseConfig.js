import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIR2TrMtpyiEZbJrVeqcObKUq-0GGY_fQ",
  authDomain: "munchkins-451da.firebaseapp.com",
  projectId: "munchkins-451da",
  storageBucket: "munchkins-451da.firebasestorage.app",
  messagingSenderId: "858125658566",
  appId: "1:858125658566:web:28d4d88b64e5f27f38aac7",
  measurementId: "G-YXV19EVM4Q",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

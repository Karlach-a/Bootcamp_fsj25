import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYgJm05cIMmybDMo6P1De_vLlS6Js_KmA",
  authDomain: "auth-app-7410b.firebaseapp.com",
  projectId: "auth-app-7410b",
  storageBucket: "auth-app-7410b.appspot.com",
  messagingSenderId: "744662166262",
  appId: "1:744662166262:web:591f3b39dcb35776109ad7"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialice fireator auth service 
export const auth = getAuth(app); 

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
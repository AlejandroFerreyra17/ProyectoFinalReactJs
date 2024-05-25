import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import Item from "../JSX/Item";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmz8UYVCEjcuyL_I9NQBsOrbfaiUE0hxs",
  authDomain: "appecommercereact.firebaseapp.com",
  projectId: "appecommercereact",
  storageBucket: "appecommercereact.appspot.com",
  messagingSenderId: "1082708647645",
  appId: "1:1082708647645:web:a36f5ee13857104dfb0534"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


export default db;
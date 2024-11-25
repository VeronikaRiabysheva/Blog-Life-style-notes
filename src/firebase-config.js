import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxHYKRuYeJ_qUMyQo7vjaW9jf4zaMQKAQ",
  authDomain: "blog-project-4ee20.firebaseapp.com",
  projectId: "blog-project-4ee20",
  storageBucket: "blog-project-4ee20.firebasestorage.app",
  messagingSenderId: "89262793410",
  appId: "1:89262793410:web:3350cb19840d73b1e9915b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

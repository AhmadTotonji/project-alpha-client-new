// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChNA3RibM2VBkEjXA0CswOkmGe_Lybyjw",
  authDomain: "avail-box.firebaseapp.com",
  projectId: "avail-box",
  storageBucket: "avail-box.appspot.com",
  messagingSenderId: "379507487258",
  appId: "1:379507487258:web:c665f46f6e0a51f73517a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
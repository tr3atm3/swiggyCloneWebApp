// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU-dmWkZYF7SKE276hCnBlsqYi5w0Rt10",
  authDomain: "swiggy-clone-6a6ec.firebaseapp.com",
  projectId: "swiggy-clone-6a6ec",
  storageBucket: "swiggy-clone-6a6ec.appspot.com",
  messagingSenderId: "661002508186",
  appId: "1:661002508186:web:a33945f6b4217d28428c23",
  measurementId: "G-Q8HVEDFH45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

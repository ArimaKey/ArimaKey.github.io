import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVM_7MEaVu3b85e0_EyuOsLu9UXLYuEpg",
  authDomain: "arimakey-64785.firebaseapp.com",
  projectId: "arimakey-64785",
  storageBucket: "arimakey-64785.appspot.com",
  messagingSenderId: "768176885014",
  appId: "1:768176885014:web:78bd33c203c11c2a291437"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
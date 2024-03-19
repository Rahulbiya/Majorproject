// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCnzJ_QJaYTuHCtapIxs7jn89NkhWFLAnw",
    authDomain: "blockchain-major.firebaseapp.com",
    projectId: "blockchain-major",
    storageBucket: "blockchain-major.appspot.com",
    messagingSenderId: "923153101688",
    appId: "1:923153101688:web:f5a22b0bfd1ec813d4ce8d",
    measurementId: "G-6RVVT5M8HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
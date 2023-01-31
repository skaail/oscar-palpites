 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyB5tYrIhH2pviJZqm2UjqIKNW-uUNODo9o",
    authDomain: "oscar-palpites.firebaseapp.com",
    projectId: "oscar-palpites",
    storageBucket: "oscar-palpites.appspot.com",
    messagingSenderId: "527862873506",
    appId: "1:527862873506:web:53b0b9a15738746c3286fb"
  };
 // Initialize Firebase
 
 const app = initializeApp(firebaseConfig);
 // Export firestore database
 // It will be imported into your react app whenever it is needed
 export const db = getFirestore(app);
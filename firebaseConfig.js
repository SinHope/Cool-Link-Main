// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getStorage } from "firebase/storage"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLOSuzQ86LeVkEODY-jV9wiGBTAamWuuU",
  authDomain: "cool-link-6e1bf.firebaseapp.com",
  projectId: "cool-link-6e1bf",
  storageBucket: "cool-link-6e1bf.appspot.com",
  messagingSenderId: "768936336043",
  appId: "1:768936336043:web:85cbcf9424f4a5000575ee",
  measurementId: "G-FGQHT9QMJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let analytics;
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

const storage = getStorage(app);

export { storage, analytics };

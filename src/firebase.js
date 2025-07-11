// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey:        "AIzaSyAmxJxE_ys4UiYU_UNUwLjKVRC4fRUA9-o",
  authDomain:    "sophia-s-salon.firebaseapp.com",
  projectId:     "sophia-s-salon",
  storageBucket: "sophia-s-salon.firebasestorage.app",
  messagingSenderId: "378253069334",
  appId:         "1:378253069334:web:e94d6ad5cd8d08bd743937",
  measurementId: "G-2W249RPR4V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
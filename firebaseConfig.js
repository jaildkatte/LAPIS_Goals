import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDvJc62mx2WJ_zUwM9uTwIl95B4ezUB0Hw",
  authDomain: "lapisgoals.firebaseapp.com",
  projectId: "lapisgoals",
  storageBucket: "lapisgoals.firebasestorage.app",
  messagingSenderId: "125033866655",
  appId: "1:125033866655:web:65cb5601de788255bfc9aa",
  measurementId: "G-4LZ3NXJF4V"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
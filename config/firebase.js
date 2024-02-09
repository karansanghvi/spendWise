import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBc5dRNoVdI8M2XyxjVLSVEbKil7j5wOhU",
  authDomain: "spendwise-22edd.firebaseapp.com",
  projectId: "spendwise-22edd",
  storageBucket: "spendwise-22edd.appspot.com",
  messagingSenderId: "518157443407",
  appId: "1:518157443407:web:130bfecbece8492b32653a",
  measurementId: "G-P2WVVWPQJL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const typeRef = collection(db, 'type')
export const expensesRef = collection(db, 'expenses')

export default app;
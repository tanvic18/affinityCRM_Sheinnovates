import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDEGiY5Lse1PfKmL9PUxwIHHiwUlquTT_E",
    authDomain: "affinitycrm-95a76.firebaseapp.com",
    projectId: "affinitycrm-95a76",
    storageBucket: "affinitycrm-95a76.firebasestorage.app",
    messagingSenderId: "622048574238",
    appId: "1:622048574238:web:daf5958f1033a5394f670f",
    measurementId: "G-FV7JN8K2FY"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

// Function to store user role in Firestore
const saveUserRole = async (uid: string, role: "admin" | "customer", email: string) => {
  await setDoc(doc(db, "users", uid), { role, email });
};

// Function to get user role
const getUserRole = async (uid: string): Promise<string | null> => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? (docSnap.data().role as string) : null;
};

export { auth, db, googleProvider, saveUserRole, getUserRole,signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT7RgGPocQls6oV1FifId2GlKvDLvTC7k",
  authDomain: "auth-80749.firebaseapp.com",
  projectId: "auth-80749",
  storageBucket: "auth-80749.firebasestorage.app",
  messagingSenderId: "486568600273",
  appId: "1:486568600273:web:45c734df817885c1abdbf0"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

export { auth, provider }
export default app

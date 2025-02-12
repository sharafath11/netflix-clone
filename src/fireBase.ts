import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZAPuGTcw-aJmDY0B0raGCoA9JA5UPjPw",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signUpUser = async (name: string, email: string, password: string): Promise<void> => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "User"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

    console.log("User created and data added to Firestore.");
  } catch (error) {
    console.error("Error signing up:", error);
  }
};
const loginUser=async(email:string,password:string):Promise<void>=>{
 try {
    await signInWithEmailAndPassword(auth,email,password);
    
 } catch ( err) {
    console.log(err);
    
 }
}
const logoutUser=()=>{
    signOut(auth)
}

export { auth, db, signUpUser,loginUser,logoutUser };

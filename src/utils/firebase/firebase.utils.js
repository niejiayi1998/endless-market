import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEiNw7I16Ksipb-_OpWRwrLowkMO9Hb00",
  authDomain: "endless-market-db.firebaseapp.com",
  projectId: "endless-market-db",
  storageBucket: "endless-market-db.appspot.com",
  messagingSenderId: "833642519081",
  appId: "1:833642519081:web:e259a9a16e8f6e4cc69a38",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  // create/ set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (err) {
      console.log("error creating the user", err.message);
    }
  }
  // if user data exists
  // return userDocRef
  return userDocRef;
};

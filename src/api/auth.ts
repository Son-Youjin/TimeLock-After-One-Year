import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

const googleProvider = new GoogleAuthProvider();

//Google
export function signInWithGoogle() {
  if (import.meta.env.DEV) {
    return signInWithPopup(auth, googleProvider);
  }
  // 배포
  return signInWithRedirect(auth, googleProvider);
}

// Email
export function signUpWithEmail(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signInWithEmail(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function subscribeAuth(
  cb: (user: import("firebase/auth").User | null) => void,
) {
  return onAuthStateChanged(auth, (user) => {
    cb(user);
  });
}

import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";

const provider = new GoogleAuthProvider();

export function signInWithGoogle() {
  return signInWithRedirect(auth, provider);
}

export function logout() {
  return signOut(auth);
}

export function subscribeAuth(
  cb: (user: import("firebase/auth").User | null) => void,
) {
  return onAuthStateChanged(auth, (user) => {
    console.log("auth state:", user);
    cb(user);
  });
}

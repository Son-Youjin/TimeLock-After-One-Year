import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase";

const provider = new GoogleAuthProvider();

export function signInWithGoogle() {
  if (import.meta.env.DEV) {
    // 로컬
    return signInWithPopup(auth, provider);
  }

  // 배포
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

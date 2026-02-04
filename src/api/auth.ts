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

// 로그인 상태
// export function subscribeAuth(cd: (user: any) => void) {
//   return onAuthStateChanged(auth, cd);
// }

export function subscribeAuth(
  cb: (user: import("firebase/auth").User | null) => void,
) {
  return onAuthStateChanged(auth, cb);
}

import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  getRedirectResult,
} from "firebase/auth";
import { auth } from "./firebase";

const provider = new GoogleAuthProvider();

export function signInWithGoogle() {
  return signInWithRedirect(auth, provider);
}

export async function handleRedirectResult() {
  const result = await getRedirectResult(auth);

  if (!result) return null;

  const credential = GoogleAuthProvider.credentialFromResult(result);

  return {
    user: result.user,
    accessToken: credential?.accessToken ?? null,
  };
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

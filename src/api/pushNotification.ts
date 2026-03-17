import { getToken } from "firebase/messaging";
import { messagingPromise, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export async function enablePush(userId: string) {
  const permission = await Notification.requestPermission();
  if (permission !== "granted") return;

  await navigator.serviceWorker.register("/firebase-messaging-sw.js");

  const registration = await navigator.serviceWorker.ready;

  const messaging = await messagingPromise;
  if (!messaging) return;

  const token = await getToken(messaging, {
    vapidKey: import.meta.env.VITE_VAPID_KEY,
    serviceWorkerRegistration: registration,
  });

  if (!token) {
    console.log("token 생성 실패");
    return;
  }

  console.log("token:", token);

  await setDoc(doc(db, "users", userId), { fcmToken: token }, { merge: true });
}

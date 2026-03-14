import { getToken } from "firebase/messaging";
import { messagingPromise, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export async function enablePush(userId: string) {
  let permission = Notification.permission;

  if (permission === "default") {
    permission = await Notification.requestPermission();
  }

  if (permission !== "granted") return;

  const messaging = await messagingPromise;
  if (!messaging) return;

  const token = await getToken(messaging, {
    vapidKey: import.meta.env.VITE_VAPID_KEY,
  });

  await setDoc(doc(db, "users", userId), { fcmToken: token }, { merge: true });
}

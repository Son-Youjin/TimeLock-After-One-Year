importScripts(
  "https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js",
);

firebase.initializeApp({
  apiKey: "AIzaSyAhx_Iy2joG7wko4mxORWhJxzuSWNVfv5I",
  authDomain: "timelock-5ead1.web.app",
  projectId: "timelock-5ead1",
  messagingSenderId: "410268089346",
  appId: "1:410268089346:web:6c95108405bf1a13dcfb1b",
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
  const title = payload.notification?.title || "TimeLock";
  const body = payload.notification?.body || "";

  self.registration.showNotification(title, {
    body,
    icon: "/icon-192.png",
  });
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  event.waitUntil(clients.openWindow("/"));
});

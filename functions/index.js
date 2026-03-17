const { onCall, onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

exports.sendMobilePush = onCall({ region: "us-central1" }, async (request) => {
  const { userId, title, body } = request.data;

  const userDoc = await db.collection("users").doc(userId).get();
  const user = userDoc.data();

  if (!user?.fcmToken) {
    return { success: false };
  }

  await admin.messaging().send({
    token: user.fcmToken,
    notification: {
      title,
      body,
    },
  });

  return { success: true };
});

exports.openLetterBatch = onRequest(
  { region: "asia-northeast3" },
  async (req, res) => {
    try {
      const now = admin.firestore.Timestamp.now();

      const snap = await db
        .collection("letters")
        .where("pushSent", "==", false)
        .where("openAt", "<=", now)
        .get();

      for (const docItem of snap.docs) {
        const letterRef = docItem.ref;

        const shouldSend = await db.runTransaction(async (tx) => {
          const snap = await tx.get(letterRef);
          const data = snap.data();

          if (!data || data.pushSent) {
            return false;
          }

          tx.update(letterRef, {
            pushSent: true,
            isOpened: true,
          });

          return data;
        });

        if (!shouldSend) continue;

        const letter = shouldSend;

        if (!letter.userId) continue;

        const userDoc = await db.collection("users").doc(letter.userId).get();
        const user = userDoc.data();

        if (user?.fcmToken) {
          await admin.messaging().send({
            token: user.fcmToken,
            notification: {
              title: "편지가 열렸어요",
              body: letter.title,
            },
          });
        }
      }

      res.send("done");
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
);

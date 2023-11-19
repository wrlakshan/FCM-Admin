var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const message = {
  data: {
    Holla: "True",
  },
  topic: "pubsub101", // Replace with the actual topic name
  notification: {
    title: "This is from FCM Admin SDK102",
    body: "hello there",
  },
};

admin
  .messaging()
  .send(message)
  .then((response) => {
    console.log("Successfully sent message:", response);
  })
  .catch((error) => {
    console.log("Error sending message:", error);
  });

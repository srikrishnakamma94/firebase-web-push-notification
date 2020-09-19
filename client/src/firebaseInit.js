import firebase from 'firebase/app';
import 'firebase/messaging';

const config = {
  apiKey: "AIzaSyAhl0lzxoFnfq2AqmOTEfNC6WlX3Anuydw",
  authDomain: "order-capture-83821.firebaseapp.com",
  databaseURL: "https://order-capture-83821.firebaseio.com",
  projectId: "order-capture-83821",
  storageBucket: "order-capture-83821.appspot.com",
  messagingSenderId: "570594088928",
  appId: "1:570594088928:web:d8a5df33518fdfb5873d85"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
});

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});

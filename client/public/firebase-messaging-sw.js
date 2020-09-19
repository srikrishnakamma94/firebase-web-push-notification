importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-messaging.js');

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

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

self.addEventListener('notificationclick', event => {
  console.log(event)
  return event;
});

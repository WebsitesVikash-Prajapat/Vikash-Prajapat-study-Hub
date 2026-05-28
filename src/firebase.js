import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJlnju26UIANxmpqv4ZM-9xdRVm7X7qbw",
  authDomain: "vikash-study-hub-9f008.firebaseapp.com",
  projectId: "vikash-study-hub-9f008",
  storageBucket: "vikash-study-hub-9f008.firebasestorage.app",
  messagingSenderId: "32969559256",
  appId: "1:32969559256:web:81dd6659f57d4a65e41bad",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
import { getAnalytics } from "firebase/analytics";
const analytics = getAnalytics(app);

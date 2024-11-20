import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkmsDSNBB28OW6drLfazElOMn9Vzdi6cU",
  authDomain: "login-3921b.firebaseapp.com",
  projectId: "login-3921b",
  storageBucket: "login-3921b.firebasestorage.app",
  messagingSenderId: "485071847968",
  appId: "1:485071847968:web:4e81c9d318a20ae6797245",
  measurementId: "G-YRZ34M24XH"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')

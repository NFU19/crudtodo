
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbu6HaxCugGf4USSpuBBRwbL-IQR6XCeg",
  authDomain: "todo-app-3c334.firebaseapp.com",
  projectId: "todo-app-3c334",
  storageBucket: "todo-app-3c334.appspot.com",
  messagingSenderId: "323581218652",
  appId: "1:323581218652:web:6c76e52b88312723327b99"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
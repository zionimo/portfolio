// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // .env파일에 적어준 내용 가져오기
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "blog-react-ccfd6.firebaseapp.com",
  projectId: "blog-react-ccfd6",
  storageBucket: "blog-react-ccfd6.appspot.com",
  messagingSenderId: "687223733066",
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 가장 먼저 인덱스에서 이 파일을 import해야함

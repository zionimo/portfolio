import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, json } from "react-router-dom";
// 웹을 사용할 때 파이어베이스를 들고오기 위해 import
// import {} from, import from을 통해서 가져오는 경우는
// export, export default로 되어있는 값을 가져와서
// 현재 js파일에서만 사용(다른 곳에서 사용하려면 다시 import)
// js, css를 들고 올 때 import해서만 들고오는 경우,
// 전체파일에 그 내용이 적용(어느 한 곳에 들고와도 ok)
import "../src/database/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

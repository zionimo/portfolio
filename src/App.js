import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginForm from "./pages/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Guest from "./pages/Guest";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/loginform" element={<LoginForm />}></Route>
          <Route path="/guest" element={<Guest />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

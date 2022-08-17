/* eslint-disable jsx-a11y/alt-text */

import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Mainpage from "./components/Mainpage";
import Course from "./components/Course";
import Registration from "./components/Registration";
import Notice from "./components/Notice";
import Helpdesk from "./components/Helpdesk";
import Mypage from "./components/Mypage";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/course" element={<Course />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/helpdesk" element={<Helpdesk />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

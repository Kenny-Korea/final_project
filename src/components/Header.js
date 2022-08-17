import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar부분 */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Hello Class</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/course");
              }}
            >
              클래스 검색
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/registration");
              }}
            >
              클래스 등록
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/notice");
              }}
            >
              이용안내
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/helpdesk");
              }}
            >
              고객센터
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/mypage");
              }}
            >
              마이페이지
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/mypage");
              }}
            >
              마이페이지
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

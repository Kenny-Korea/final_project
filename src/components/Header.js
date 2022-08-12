import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const navigate = useNavigate();
  const navigator = (a) => {
    console.log("test");
    navigate(a);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Hello Class</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={navigator}>홈</Nav.Link>
            <Nav.Link onClick={navigator}>홈</Nav.Link>
            <Nav.Link onClick={navigator}>홈</Nav.Link>
            <Nav.Link onClick={navigator}>홈</Nav.Link>
            <Nav.Link onClick={navigator}>홈</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

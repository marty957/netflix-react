import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Search } from "react-bootstrap-icons";
import { Bell } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import "../App.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
      <Navbar.Brand href="#home">
        <Image src="../src/assets/logo.png" width={150} height={65} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-between" id="basic-navbar-nav">
        <Nav>
          <Nav.Item>
            <Nav.Link className="active fs-5 fw-bold" href="#home">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="fs-5 fw-bold" href="#home">
              TV Shows
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="fs-5 fw-bold" href="#home">
              Movies
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="fs-5 fw-bold" href="#home">
              Recently Added
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="fs-5 fw-bold" href="#home">
              My List
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Nav className="aling-items-center">
          <Nav.Item className="me-2">
            <Search className="bi bi-search icons" />
          </Nav.Item>
          <Nav.Item className="mx-2">
            <Nav.Link className="fs-5 fw-bold active">KIDS</Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <Bell className="bi bi-search icons" />
          </Nav.Item>
          <Nav.Item className="mx-2">
            <PersonCircle className="bi bi-search icons" />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import logo from "../../assets/logo.jpg"; // Asegúrate de tener este recurso en la ubicación especificada
import AddProductModal from "../AddProductModal/AddProductModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Navbar expand="lg" sticky="top " bg="white">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              width="25%"
              height="20%"
              src={logo}
              alt="Image of logotype"
              fluid
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end ml-auto">
              <Nav.Link title="Add product">
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  size="2xl"
                  style={{ color: "#DF6A45" }}
                  onClick={handleShow}
                />
              </Nav.Link>
              <Nav.Link href="#products" className="font-weight-bold">Products</Nav.Link>
              <Nav.Link href="#contact" className="font-weight-bold">Contact</Nav.Link>
              <Nav.Link title="Logout">
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  size="2xl"
                  style={{ color: "#DF6A45" }}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <AddProductModal show={showModal} handleClose={handleClose} />
    </>
  );
}

export default Header;

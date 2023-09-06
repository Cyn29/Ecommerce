import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import AddProductModal from "../AddProductModal/AddProductModal";
import { GrAddCircle } from "react-icons/gr";
import { GrLogout } from "react-icons/gr";
import { animateScroll as scroll } from "react-scroll";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 200,
    });
  };

  const scrollToTopAndProducts = () => {
    scrollToTop();
    setTimeout(() => {
      const contactFooter = document.getElementById("contact-footer");
      if (contactFooter) {
        contactFooter.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  return (
    <>
      <Navbar expand="lg" sticky="top" bg="white">
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={scrollToTop}>
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
            <Nav className="ml-auto">
              <Nav.Link title="Add product">
                <GrAddCircle onClick={handleShow} size={"2rem"} />
              </Nav.Link>
              <Nav.Link as={NavLink} to="/products" onClick={scrollToTop}>
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/" onClick={scrollToTopAndProducts}>
                Contact
              </Nav.Link>
              <Nav.Link title="Logout">
                <GrLogout size={"2rem"} />
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



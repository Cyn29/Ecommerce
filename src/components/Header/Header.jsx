import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import AddProductModal from "../AddProductModal/AddProductModal";
import { GrAddCircle } from "react-icons/gr";
import { GrLogout } from "react-icons/gr";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 200, // Ajusta la duración de la animación en milisegundos
    });
  };

  return (
    <>
      <Navbar expand="lg" sticky="top " bg="white">
        <Container>
          <Navbar.Brand as={NavLink} to="/" onClick={scrollToTop}>
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
                <GrAddCircle onClick={handleShow} size={"2rem"} />
              </Nav.Link>
              <Nav.Link as={NavLink} to="/products">
                Products
              </Nav.Link>
              <ScrollLink
                to="contact-footer"
                smooth={true}
                duration={200} // Ajusta la duración de la animación aquí
                offset={-40} // Ajusta este valor según sea necesario
                spy={true}
                exact="true"
                onClick={scrollToTop} // Esto asegura que se haga un desplazamiento suave incluso desde "Products" a "Contact"
              >
                Contact
              </ScrollLink>
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

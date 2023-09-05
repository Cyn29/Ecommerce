import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import logo from "../../assets/logo.jpg"; // Asegúrate de tener este recurso en la ubicación especificada
import logouticon from "../../assets/icons/logout.png"; // Asegúrate de tener este recurso en la ubicación especificada
import AddProductModal from '../AddProductModal/AddProductModal';
import { GrAddCircle } from 'react-icons/gr';

function Header() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
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
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Image
                src={logouticon}
                width="5%"
                height="1%"
                alt="Logout icon"
                fluid
              />
              <Nav.Link href="#addProduct" onClick={handleShow}><GrAddCircle /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <AddProductModal show={showModal} handleClose={handleClose} />
    </>
  );
}

export default Header;
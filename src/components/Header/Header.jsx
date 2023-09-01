import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Row className="w-100 align-items-center justify-content-between">
            <Col md={2} className="me-auto">
              <Image src="../../assets/logo.jpg"/>
            </Col>
            <Col md={9} className=" w-50 justify-content-end ms-auto">
              <Nav className="navbar">
                <Col md={3}>
                <Nav.Link href="#home">Home</Nav.Link>
                </Col>
                <Col md={3}>
                <Nav.Link href="#features">Features</Nav.Link>
                </Col>
                <Col md={3}>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Col>
              </Nav>
            </Col>
          </Row>
        </Container>
        </Navbar>
    </>
  );
}

export default Header;

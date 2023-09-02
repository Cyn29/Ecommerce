import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.jpg";
import logouticon from "../../assets/icons/logout.png";

function Header() {
    return (
        <Navbar expand="lg">
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
                    <Navbar.Collapse  id="basic-navbar-nav">
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
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;

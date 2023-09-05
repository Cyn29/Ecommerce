import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import logo from "../../assets/logo.jpg";
import { GrAddCircle } from 'react-icons/gr';
import { GrLogout } from 'react-icons/gr';

function Header () {
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
                        aria-label="logo"
                    />
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end ml-auto">
                        <Nav.Link title="Add product"><GrAddCircle size={"2rem"}/></Nav.Link>
                            <Nav.Link href="#products">Products</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link title="Logout"><GrLogout size={"2rem"}/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;

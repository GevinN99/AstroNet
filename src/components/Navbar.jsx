import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/images/AstroNet.png';
import "../styles/Navbar.css";

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/"><img src={logo} alt="AstroNet" style={{width:'100px'}}/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/mrp">Mars Rover Photos</Nav.Link>
                        <Nav.Link href="/apod">Astronomy Picture of the Day</Nav.Link>
                        <Nav.Link href="/epici">EPIC Images</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

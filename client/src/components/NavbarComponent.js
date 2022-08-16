import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {GiShoppingBag} from 'react-icons/gi';
import {AiOutlineSearch} from 'react-icons/ai';


function BasicExample() {
  return (
    <div className="nav-container">
    <Navbar bg="none" expand="lg">
        <Navbar.Brand href="#home">RibadiyaBrothers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#link">Home</Nav.Link>
            <Nav.Link href="#link">AboutUS</Nav.Link>
            <Nav.Link href="#link">ContactUS</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            <Nav.Link href="#link"><AiOutlineSearch/></Nav.Link>
            <Nav.Link href="#link"><GiShoppingBag/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default BasicExample;
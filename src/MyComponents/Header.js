import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offtoggle from './Offtoggle';
 
function Header() {
  return (
    <Navbar expand="lg"   className=" px-4 py-3" >
      <Container fluid>
        <Navbar.Brand href="/">
          {/* <img src='/logo512.png' alt="Project Alpha" className='img-fluid' width="200px"/> */}
          <h2 className='text-light logo'>Logo</h2>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          <Nav
            className=" my-2   my-lg-0"
           
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Service">Services</Nav.Link>
            <Nav.Link href="/contact">Conatct</Nav.Link> 
            <Button   className="d-flex">
               Request Quote
          </Button>
          </Nav>
         
          {/* <Button   className="d-flex">
               Request Quote
          </Button> */}
          {/* <Offtoggle/> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

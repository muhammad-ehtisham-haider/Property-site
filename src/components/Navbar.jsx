import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import logo from '../logo.png';


function NavScrollExample() {
  return (
     
       <>

     <div className="container-fluid">
      <div className="row bar" style={{height: "70px"}}>
        <div className="col ps-5 pt-3"> <Navbar.Brand href="#"> <img src={logo} alt="" /> </Navbar.Brand> </div>
        <div className="col pe-5 pt-2 d-flex justify-content-end">
         <div className="lefts">
          <Navbar  expand="lg">
           <Container fluid>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Nav.Link  href="#card"> <div className="link">Residencies </div>  </Nav.Link>
            <Nav.Link href="#value">  <div className="link">Our Value</div> </Nav.Link>
            <Nav.Link href="#contac">  <div className="link">Contact Us</div> </Nav.Link>
            <Nav.Link href="#started">  <div className="link ">Get Started</div></Nav.Link>
          </Nav>
          <Form>
            <Button className='btn'>Contact</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
       
        </div>
      </div>
     </div>
     



   
    </>
  );
}

export default NavScrollExample;
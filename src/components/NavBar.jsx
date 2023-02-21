import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {

  //const categories = ["electronics","jewelery","men's clothing","women's clothing"]; ---> Categorias de la api

  return (
    <Navbar bg="light" expand="lg" className='navbar'>
      <Container fluid>
        <Navbar.Brand as='span'><Link to='/'>Pontin Ecommerce</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto my-2 my-lg-0">
            <Link to={'/cart'}><CartWidget /></Link>
            <NavDropdown title="Categories" id="navbarDropdown">
              <NavDropdown.Item as='span'><Link to='/category/electronics' >Electronica</Link></NavDropdown.Item>
              <NavDropdown.Item as='span'><Link to='/category/jewelery' >Joyas</Link></NavDropdown.Item>
              <NavDropdown.Item as='span'><Link to="/category/men's clothing" >Ropa hombre</Link></NavDropdown.Item>
              <NavDropdown.Item as='span'><Link to="/category/women's clothing" >Ropa mujer</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;

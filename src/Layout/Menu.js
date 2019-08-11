import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class Menu extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }
  render() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/catalogo">Catalogo</Nav.Link>
          <Nav.Link href="#registro">Registro</Nav.Link>
          <Nav.Link href="#login">Log in</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Buscar</Button>
        </Form>
      </Navbar>
    );
    
  }
}

export default Menu;
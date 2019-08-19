import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class Menu extends Component {
  constructor(props){
    super(props)
    // this.state ={
    //   buscar: ''
    // }
  }

//   handleSubmit(event) {
//     console.log(this.state);
//     fetch('http://localhost:3000/products/buscar',{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify(this.state)
//     })
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data)
//     })
    
//     event.preventDefault();
// }

// handleChange(event) {
    
//   const target = event.target;
//   const value = target.type === 'checkbox' ? target.checked : target.value;
//   const name = target.name;
//   console.log(name)
//   this.setState({
//       [name]: value
//   });
// }


  render() {
    return (
        <Navbar bg="dark" variant="dark" className="mb-2">
        <Navbar.Brand as={Link} to="/">Tienda Online</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/catalogo">Catalogo</Nav.Link>
          <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
          <Nav.Link as={Link} to="/login">Log in</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Búsqueda rápida" name="buscar" className="mr-sm-2"  onChange={this.handleChange.bind(this)} value={this.state.buscar}/>
          <Button variant="outline-info" onSubmit={this.handleSubmit.bind(this)}>Buscar</Button>
        </Form> */}
      </Navbar>
    );
    
  }
}

export default Menu;
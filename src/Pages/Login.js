import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      usuario: "",
      password: ""
    };
  }
  render() {
    return (
      <Container>
        <Row>
          <h2 className="text-secondary">Ingresar a cuenta</h2>
        </Row>
        <Row>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button type="submit">Ingresar</Button>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default Login;

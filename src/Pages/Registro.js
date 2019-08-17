import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Registro extends Component {
  render() {
    return (
      <Container>
        <Row>
          <h2 className="text-secondary">Registrarse</h2>
        </Row>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label>Calle</Form.Label>
              <Form.Control placeholder="Riobamba" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label>Altura / Depto - piso</Form.Label>
              <Form.Control placeholder="848 piso 21 depto A" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Provincia</Form.Label>
              <Form.Control as="select">
                <option>Seleccionar</option>
                <option>Buenos Aires</option>
                <option>Córdoba</option>
                <option>Entre Ríos</option>
                <option>Tucumán</option>
                <option>Mendoza</option>
                <option>Neuquén</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Cód. Postal</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Registro;

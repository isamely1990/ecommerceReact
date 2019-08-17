import React, { Component } from "react";
import Producto from "../Components/Producto";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class Catalogo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      productos: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/products/all")
      .then(res => res.json())
      .then(
        result => {
          console.log("holiii");
          console.log(result);
          this.setState({
            isLoaded: true,
            productos: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log("nop");
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    return (
      <Container>
        <Row>
          <h2 className="text-secondary">Catálogo</h2>
        </Row>
        <Row>
          <h4 className="p-3 mb-2 bg-info text-white rounded w-100">Nuestros productos</h4>
        </Row>
        <Row>
          {this.state.productos.map(producto => (
            <Col>
              <Producto data={producto} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Catalogo;

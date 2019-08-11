import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Producto extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card style={{ width: "25rem", marginBottom : "1em"}}>
        <Card.Body>
          <Card.Title>{this.props.data.nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Cod. {this.props.data.id}
          </Card.Subtitle>
          <Card.Text>{this.props.data.detalle}</Card.Text>
          <Card.Text>${this.props.data.precio}</Card.Text>
          <Card.Link href="#">Agregar al carrito</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default Producto;

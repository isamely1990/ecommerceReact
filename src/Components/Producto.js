import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'
class Producto extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <Card style={{ width: "25rem", marginBottom : "1em"}}>
        <Card.Img variant="top" src={`img/${this.props.data.imagen}`}/>
        <Card.Body>
          <Card.Title>{this.props.data.nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Cod. {this.props.data.id}
          </Card.Subtitle>
          <Card.Text>{this.props.data.detalle}</Card.Text>
          <Card.Text>${this.props.data.precio}</Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Producto;

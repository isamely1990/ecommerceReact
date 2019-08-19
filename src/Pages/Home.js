import React, { Component } from "react";
import Producto from "../Components/Producto";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      productos: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            productos: result
          });
        },
        error => {
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
          <h2 className="text-secondary">Home</h2>
        </Row>
        <Row>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= {`img/slide1.jpg`}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= {`img/slide2.jpg`}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= {`img/slide3.jpg`}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
          <h4 className="p-3 mb-2 bg-info text-white rounded w-100">Últimos Productos</h4>
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

export default Home;

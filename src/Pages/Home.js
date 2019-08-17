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
          <h2 className="text-secondary">Home</h2>
        </Row>
        <Row>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= {require('../Assets/img/slide1.jpg')}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= {require('../Assets/img/slide2.jpg')}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= {require('../Assets/img/slide3.jpg')}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
          <h4 className="p-3 mb-2 bg-info text-white rounded w-100">Productos destacados</h4>
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

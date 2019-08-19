import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";

/* class Registro extends Component {
   constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      mail: "",
      password: "",
      calle: "",
      altura: "",
      ciudad: "",
      provincia: "",
      postal: ""
    };
  }

  handleSubmit(event) {
    console.log('submittt');
    console.log(this.state);
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });

    event.preventDefault();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "select" ? target.selected : target.value;
    const name = target.name;
    console.log(name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <h2 className="text-secondary">Registrarse</h2>
        </Row>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control inputref={(ref) => { this.nombre = ref }} 
                type="text"
                placeholder="Nombre"
                name="nombre"
                onChange={this.handleChange.bind(this)}
                value={this.state.nombre}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control inputref={(ref) => { this.mail = ref }} 
                type="email"
                placeholder="Email"
                name="mail"
                onChange={this.handleChange.bind(this)}
                value={this.state.mail}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control inputref={(ref) => { this.password = ref }} 
                type="password"
                placeholder="Contraseña"
                name="password"
                onChange={this.handleChange.bind(this)}
                value={this.state.password}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label>Calle</Form.Label>
              <Form.Control inputref={(ref) => { this.calle = ref }} 
                placeholder="Riobamba"
                name="calle"
                onChange={this.handleChange.bind(this)}
                value={this.state.calle}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label>Altura / Depto - piso</Form.Label>
              <Form.Control inputref={(ref) => { this.altura = ref }} 
                placeholder="848 piso 21 depto A"
                name="altura"
                onChange={this.handleChange.bind(this)}
                value={this.state.altura}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control inputref={(ref) => { this.ciudad = ref }} 
                name="ciudad"
                placeholder="Buenos Aires"
                onChange={this.handleChange.bind(this)}
                value={this.state.ciudad}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Provincia</Form.Label>
              <Form.Control inputref={(ref) => { this.provincia = ref }} 
                as="select"
                name="provincia"
                onChange={this.handleChange.bind(this)}
                value={this.state.provincia}
              >
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
              <Form.Control inputref={(ref) => { this.postal = ref }} 
                name="postal"
                placeholder="5485"
                onChange={this.handleChange.bind(this)}
                value={this.state.postal}
              />
            </Form.Group>
          </Form.Row>

          <Button
            variant="primary"
            type="submit"
            onSubmit={this.handleSubmit.bind(this)}
          >
            Registrarse
          </Button>
        </Form>
      </Container>
    );
  } 
} */

const Registro = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{
        nombre: "",
        mail: "",
        password: "",
        calle: "",
        altura: "",
        ciudad: "",
        provincia: "",
        postal: ""
      }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          fetch("http://localhost:3000/users/signin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(values, null, 2)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
            });
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="nombre" />
          <ErrorMessage name="nombre" component="div" />
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <Field type="calle" name="calle" />
          <ErrorMessage name="calle" component="div" />
          <Field type="altura" name="altura" />
          <ErrorMessage name="altura" component="div" />
          <Field type="ciudad" name="ciudad" />
          <ErrorMessage name="ciudad" component="div" />
          <Field type="provincia" name="provincia" />
          <ErrorMessage name="provincia" component="div" />
          <Field type="postal" name="postal" />
          <ErrorMessage name="postal" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

// export default Basic;
export default Registro;

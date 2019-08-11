import React, { Component } from 'react';

class Producto extends Component {
 constructor(props) {
     super(props)
     console.log(this.props)
 }
 render() {
    let asd = this.props.detalle 
    return (
        this.props.data.map(producto => <li>{producto}</li>),
        <p>{asd}</p>
    );
  }

}

export default Producto;
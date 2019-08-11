import React, { Component } from 'react';
import './App.css';
import Producto from './Components/Producto';
import Menu from './Layout/Menu';


class App extends Component {
  render() {
    let productos = ['Carteras','Zapatos', 'Accesorios']
    let info= 'Detalle del producto '
    return (
      <div className="App">
        Hola Mundo
        <Menu/>
        <Producto data={productos} detalle={info} />
      </div>
    );
  }
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Layout/Menu';
import Home from './Pages/Home';
import Catalogo from './Pages/Catalogo'
import Login from './Pages/Login';
import Registro from './Pages/Registro';

ReactDOM.render(<BrowserRouter>
    <div>
      <Route component={Menu} /> 
      { /*Lo que levanta primero siempre serà el menu con esa sintaxis*/}
      <Route exact path='/' component={Home} />
      <Route exact path='/catalogo' component={Catalogo} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/registro' component={Registro} />
    </div>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Component } from 'react';

class Menu extends Component {
 constructor(props) {
     super(props)
 }
 render() {
    return (
       this.props.nav.map(menu => <li>{menu}</li>)
    );
  }

}

export default Menu;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <Link to="/" className="navbar-brand"><u><h2>BMI CALCULATOR</h2></u></Link>
        
      </nav>
    );
  }
}
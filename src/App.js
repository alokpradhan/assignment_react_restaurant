import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar';
import Contact from './contactUs';
import Reservations from './reservations';
import Header from './header';
import Menu from './menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar reservations="#reservations" menu='#menu' contact='#contact' />
        <Header />
        <Reservations />
        <Menu />
        <Contact />
      </div>
    );
  }
}

export default App;

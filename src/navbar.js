import React from 'react'
import logo from './logo.svg'

const Navbar = ({reservations, menu, contact}) => {
  return (
    <div className="App-header">
      <div>
        <img src={logo} className="App-logo" alt="" />
        <h1 className="App-title">Khao</h1>
        <p>EST 2018</p>
      </div>
      <div>
        <a href={reservations} style={{padding: 10 + 'px'}}>RESERVATIONS</a>
        <span>{'\u2022'}</span>
        <a href={menu} style={{padding: 10 + 'px'}}>FOOD & DRINK</a>
        <span>{'\u2022'}</span>
        <a href={contact} style={{padding: 10 + 'px'}}>CONTACT</a>
      </div>
    </div>
  )
}

export default Navbar
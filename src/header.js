import React from 'react'
import food from './food.jpg'

const Header = () => {
  return (
    <div className='container' id='home'>
      <div className='jumbotron'>
        <img src={food} className='img-responsive' />
        <h3>Welcome to Khao</h3>
      </div>
    </div>
  )
}

export default Header
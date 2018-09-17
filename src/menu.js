import React from 'react'
import ItemCards from './itemCards'

const foodItems = [
  { 
    name: 'Tandoori Chicken',
    description: 'Awesome',
    price: '$10'
  },
  { 
    name: 'Malai Kebab',
    description: 'Amazing',
    price: '$11'
  },
  { 
    name: 'Reshmi Kebab',
    description: 'Mouthwatering',
    price: '$12'
  }
]

const Menu = () => {

  return (
    <div id='menu'>
      <h2>Food & Drink</h2>
      <ItemCards items={foodItems} />
    </div>
  )

}

export default Menu
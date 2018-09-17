import React from 'react'

const itemCards = ({items}) => {

  const cards = items.map((foodItem) => (
    <div className='itemCard'>
      <h4>{foodItem.name}</h4>
      <dl>
        <dt>Description</dt>
        <dd>{foodItem.description}</dd>
        <dt>Price</dt>
        <dd>{foodItem.price}</dd>
      </dl>
    </div>
  ))

  return (
    <div>
      {cards}
    </div>
  )
}

export default itemCards
import React from 'react' 

const Reservations = () => {
  return (
    <div id='reservations'>
      <p>Make a booking</p>
      <input placeholder='Enter a date' className='form-field'></input><br/>
      <input placeholder='Enter a time' className='form-field'></input><br/>
      <input placeholder='Enter the number of people' className='form-field'></input><br/>
      <button>Find a table</button>
    </div>
  )
}

export default Reservations
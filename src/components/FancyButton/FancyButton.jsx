import React, { useState }from 'react'
import './fancyButton.css'

const FancyButton = () => {
  
  const [count, setCount] = useState(0);
  
  return (
    <div className='fancy-button-container'>
      <p className='counter'>{count}</p>
      <button onClick={() => {setCount(count+1)}} className='fancy-button'>Fancy Buttons</button>
      <button onClick={() => {setCount(0)}} className='reset-button'>RESET</button>
    </div>
  )
}

export default FancyButton
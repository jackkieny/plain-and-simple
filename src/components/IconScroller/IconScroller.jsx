import React, { useState } from 'react'
import './iconScroller.css'
import {
    Bs0Circle, Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle,
    Bs5Circle, Bs6Circle, Bs7Circle, Bs8Circle, Bs9Circle
} from 'react-icons/bs'
import { icons } from 'react-icons'


const IconScroller = () => {
    const [toggle, setToggle] = useState(false);

    const toggleSwitch = () => {
        setToggle (toggle => !toggle);
        console.log(toggle);
    }

  return (
    <div className='icon-scroller-container'>
        
    </div>
  )
}

export default IconScroller
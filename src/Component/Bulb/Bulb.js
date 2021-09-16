import { useState } from 'react'
import React from 'react'
import bulbOn from '../Images/iphone-onn.jpg'
import bulbOff from '../Images/iphone-off.jpg'
import '../Bulb/Bulb.css'


function Bulb() {
    const [isBulbOn, setBulbState] = useState(false)
    const bulbSource = isBulbOn ? bulbOn : bulbOff
    const buttonText = isBulbOn ? "Switch Off" : "Switch On"
    function toogleBtnState() {
        // console.log('working')
        setBulbState(!isBulbOn)
    }

    return (
        <div className='bulbContainer'>
            <img className="img-btn" width={800} src={bulbSource} />
            <button onClick={toogleBtnState} className='bulbSwitchOn'>{buttonText}</button>
        </div>
    )
}

export default Bulb;
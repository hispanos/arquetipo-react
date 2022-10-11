import React, { useState } from 'react'
import './style.scss'

const Counter = () => {

    const [number, setNumber] = useState(5)

    const handleClick = (operation) => {
        if (operation === 'plus') {
            setNumber(number + 1)
        }else {
            setNumber(number - 1)
        }
    }

  return (
    <>
        <h3>Contador</h3>
        <div className="counter__container">
            <button onClick={() => {handleClick('minus')}}>-</button>
            <span>{number}</span>
            <button onClick={() => {handleClick('plus')}}>+</button>
        </div>
    </>
  )
}

export default Counter
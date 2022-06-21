import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [value, setValue] = useState(0)
    const handlePlus = () => {
        setValue(value + 1)
    }
    const handleMinus = () => {
        if (value > 0) {
            setValue(value - 1)
        }
        
    }
  return (
    <div style={{marginTop: '10px', display: 'flex', justifyContent: 'center', marginBottom: '100px'}}>
        <button onClick={handleMinus}>-</button>
        <h1 style={{padding:'10px'}}>{value}</h1>
        <button  onClick={handlePlus}>+</button>
        
    </div>
  )
}

export default Counter
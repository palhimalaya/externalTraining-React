import React from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react'

const Counter = () => {
    const [value, setValue] = useState(0)
    const [hover, setHover] = useState('')
    const handlePlus = () => {
        setValue(value + 1)
    }
    const handleMinus = () => {
        if (value > 0) {
            setValue(value - 1)
        }
        
    }
    const onHover =()=>{
        setHover('gold')
    }
    const offHover =()=>{
        setHover('red')
    }
  return (
    <div>
        
        <AiOutlineMinusCircle size={32} color={hover} onMouseEnter={onHover} onMouseLeave={offHover} onClick={handleMinus}/> 
        <h1 style={{padding: '5px',}}>
            {value}
        </h1>
             <AiOutlinePlusCircle size={32} color={'green'} onClick={handlePlus}/>       
    </div>
  )
}

export default Counter
import React, { useState } from 'react'

function Input({setInput}) {
    const [value,setValue] = useState("")


    const handleClick = () => {
        setInput(value);
        setValue('')
    }
    return (
        <div>
            <input 
                type="text" 
                placeholder='example.com' 
                value={value}
                onChange={(e)=>setValue(e.target.value)}
            />
            <button onClick={handleClick}>ok</button>
        </div>
    )
}

export default Input
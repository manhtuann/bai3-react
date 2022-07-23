import React, { useState } from 'react'

function Button() {
    const [click,setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }
    return (
        <div>
            <button className={click ? "active" :''} onClick={handleClick}>shrtco.de</button>
                <button>9qr.de</button>
                <button>shiny.lik</button>
        </div>
    )
}

export default Button
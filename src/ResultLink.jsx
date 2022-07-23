import React, { useEffect, useState } from 'react'
import './form.css'

function ResultLink({inputValue}) {

    const [shortLink,setShortLink] = useState("")

    useEffect(() => {
        fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
            .then(response => response.json())
            .then(data => setShortLink(data.result.full_short_link));

    }, [inputValue]);
    
    return (
        <div>
            {shortLink && <p className='shortlink'>{shortLink}</p>}
        </div>
    )
}

export default ResultLink
import React, { useEffect, useState } from 'react'
import Button from './Button';
import './form.css'
import Input from './input';
import ResultLink from './ResultLink';
function Form() {

    const [input,setInput] = useState("")

return (
    <>
        <div className="container">
            <p className="title">the privacy-friendly URL Shortener</p>
            <div className="main">
                <span className='main-link'>Link Shortencer</span>
                <div className="link">
                    <p>enter a link:</p>
                    <Input setInput={setInput}/>
                </div>
                <div className="link">
                    <p>short domain:</p>
                    <div className="btn">
                        <Button />

                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur velit libero accusamus, accusantium eos cumque, autem, provident rerum dolore quas officiis quam nihil harum suscipit laborum corporis ea ex. Commodi.</p>
            </div>
        </div>
        <ResultLink inputValue={input}/>
    </>
)
}

export default Form
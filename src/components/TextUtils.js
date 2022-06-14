import { useState } from "react";
import React from 'react'


export default function TextUtils(props) {
    const [text, setText] = useState('');


    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const Case = () => {
        let newText = text.toUpperCase();

        if (text === newText) {
            setText(text.toLowerCase());
            props.alert('Case is now LowerCase', 'primary');
        }
        else {
            setText(newText);
            props.alert('Case is now UpperCase', 'primary');
        }
    }

    const handleCopy = () => {
        let text = document.getElementById('mybox');
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    const clear = () => {
        let newText = ''
        setText(newText);

    }
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
    }
    const Trim = () => {

    }

    return (
        <div className='container my-5' style={{ color: props.mode === 'dark' ? "white" : "black" }}>
            <div className="mb-3">
                <h4 className="form-label">Enter Your Text to Analyze</h4>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="10" placeholder="Enter Your Text Here"></textarea>
            </div>
            <div className="container">
                <button type="button" className="btn btn-primary mx-1 my-1">Random</button>
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={Case}>Change Case</button>
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={Trim}>Trim</button>
                <button type="button" className="btn btn-primary mx-1 my-1">Sort (Asec/Desc)</button>
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Every Whitespace</button>
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Clip Text to Clipbored</button>
                <button type="button" className="btn btn-danger mx-1 my-1" onClick={clear}>Clear Output</button>
            </div>
            <div className="container my-4">
                <h4>Your Text Summary</h4>
                <p>No. of words {(text.split(" ").length) - 1} and No. of Characters {text.length}</p>
                <p>Minutes to read: {0.008 * text.split(" ").length}</p>
            </div>
            <div className="container my-3">
                <h5>Features we cover:</h5>
                <ul>
                    <li><strong>Data Generation</strong> TextUtils can help you generate text or numbers. Data can be generated from the preloaded dictionary, random characters, or random numbers.</li>
                </ul>
            </div>
        </div>
    )
}

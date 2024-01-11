import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function MyForm() {
    return(
        <form>
            <lable>
                Enter your name
            </lable>
            <input type='text' />
        </form>
    );
}

//using hooks to handle state in a form
function MyForm2() {
    const [name, setName] = useState("");

    return(
        <form>
            <lable>
                Enter your name
            </lable>
            <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
             />
        </form>
    );
}

//submitting a form by adding event handler onSubmit
function MyForm3() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name
            </label>
            <input 
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
             />
        </form>
    );
}
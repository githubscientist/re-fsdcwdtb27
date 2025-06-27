/*
    useRef Hook:

    - useRef is a React Hook that allows you to select a DOM element directly instead of the old way of using document.getElementById or document.querySelector.
*/

import { useRef } from "react";

const App = () => {

    const header = useRef(null);

    const handleChange = () => {
        header.current.textContent = 'Hello, World!';
        header.current.style.color = 'blue';
    }

    return (
        <div>
            <h1 ref={header}>Hello, Welcome!</h1>
            <button onClick={handleChange}>Change Text</button>
        </div>
    )
}

export default App;
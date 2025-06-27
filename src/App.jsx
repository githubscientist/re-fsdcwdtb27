/*
    useRef Hook:

    - useRef is a React Hook that allows you to select a DOM element directly instead of the old way of using document.getElementById or document.querySelector.

    1. To get a reference to a DOM element.
    2. The value of the ref object is mutable and can be changed without causing a re-render.
    3. When the component re-renders, the ref object persists the same reference or value across the renders.
*/

import { useRef, useState } from "react";

const App = () => {

    let [refresh, setRefresh] = useState(0);
    let count = useRef(0);

    const handleChange = () => {
        count.current += 1;

        console.log(count.current);
    }

    console.log("Component rendered", refresh);

    return (
        <div>
            <h1>Count: {count.current}</h1>
            <button onClick={handleChange}>Increase</button>
            <button onClick={() => setRefresh(refresh + 1)}>Re-Render Component</button>
        </div>
    )
}

export default App;
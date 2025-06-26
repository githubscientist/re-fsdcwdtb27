import { useRef, useState } from "react";

const App = () => {

    const [state, setState] = useState(0);
    let count = useRef(0);

    const handleIncrease = () => {
        count.current += 1;
        console.log("Count:", count.current);
    }

    return (
        <div>
            <h1>Count: {count.current}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={() => setState(state + 1)}>Re-Render</button>
        </div>
    )
}

export default App;
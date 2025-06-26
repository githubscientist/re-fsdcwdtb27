import { useState } from "react";

const App = () => {

    const [state, setState] = useState(0);
    let [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
        console.log("Count:", count);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={() => setState(state + 1)}>Re-Render</button>
        </div>
    )
}

export default App;
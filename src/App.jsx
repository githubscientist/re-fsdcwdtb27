import { useEffect, useState } from "react";

const App = () => {

    const [counter, setCounter] = useState(0);

    // this effect runs only once when the component mounts
    useEffect(() => {
        console.log("Counter value:", counter);
    }, []);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
        </div>
    )
}

export default App;
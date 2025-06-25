/*
    useEffect
    - useEffect is a hook that allows you to perform side effects in function components.
*/

import { useEffect, useState } from "react";

const App = () => {

    const [counter, setCounter] = useState(0);
    const [count, setCount] = useState(0);

    // this effect runs when the component mounts and whenever any state or prop changes
    // useEffect(() => {
    //     console.log("Counter value:", counter);
    // });

    // this effect runs only when the component mounts
    // useEffect(() => {
    //     console.log("Counter value:", counter);
    // }, []);

    // this effect runs when the component mounts and whenever the counter state changes.
    useEffect(() => {
        console.log("Counter value:", counter);
    }, [counter]);

    useEffect(() => {
        console.log("Count value:", count);
    }, [count]);

    const handleIncrease = () => {
        setCounter(counter + 1);
        // setCount(count + 1);
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

export default App;
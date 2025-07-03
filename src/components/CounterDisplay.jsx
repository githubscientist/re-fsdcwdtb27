import { useContext } from "react";
import { CounterContext } from "../App";

const CounterDisplay = () => {

    // 3. Use the useContext hook to access the context values
    const { count } = useContext(CounterContext);

    return (
        <>
            <h1>Counter: {count}</h1>
        </>
    )
}

export default CounterDisplay;
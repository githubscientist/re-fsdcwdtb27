import { createContext, useState } from "react";
import CounterDisplay from "./components/CounterDisplay";
import Button from "./components/Button";

// 1. Create a Context
export const CounterContext = createContext();

// 2. Wrap the App component with the Context Provider and set the value prop to an object containing the states or values or functions you want to share
const App = () => {

    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            <>
                <CounterDisplay />
                <Button />
            </>
        </CounterContext.Provider>
    )
}

export default App;
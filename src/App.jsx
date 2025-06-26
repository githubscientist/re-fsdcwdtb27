// State Management using useReducer Hook in React
import { useReducer } from "react";
import reducer from "./reducers/countReducer";

const App = () => {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch({ type: 'INC', payload: 5 })}>Increase</button>
            <button onClick={() => dispatch({ type: 'DEC', payload: 5 })}>Decrease</button>
        </div>
    )
}

export default App;
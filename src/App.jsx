// State Management using useState Hook in React
import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
    }
}

const App = () => {

    // console.log(useState(0));
    const [count, dispatch] = useReducer(reducer, 0);

    const handleIncrease = () => {
        dispatch({ type: 'INC' });
    }

    const handleDecrease = () => {
        dispatch({ type: 'DEC' })
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    )
}

export default App;
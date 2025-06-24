// rendering -> means the component is inserted into the DOM

import { useState } from "react";

// re-rendering -> means the component is updated in the DOM
const App = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        // state is immutable, so we cannot directly modify it
        // count = count + 1;

        setCount(count + 1);
        // the current value of count is used to update the state
        // the state change causes the component to re-render
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrease}>Increment</button>
        </div>
    )
}

export default App;
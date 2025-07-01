import { useCallback, useMemo, useState } from "react";

const App = () => {

    const [state, setState] = useState(0);

    const computation = () => {
        console.log("Starting computation...");

        let sum = 0;

        for (let i = 1; i <= 1000000; i++) {
            sum += i;
        }

        return sum;
    }

    let result = useMemo(computation, []);

    let handleClick = useCallback(() => {
        console.log('button clicked');
    }, []);

    return (
        <>
            <h3>Result of the computation is: {result}</h3>
            <button onClick={() => setState(state + 1)}>Change State</button>
            &nbsp;
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default App;
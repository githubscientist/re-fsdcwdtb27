import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCR':
            return state + 1;
        default:
            return state;
    }
}

const Home = () => {

    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch({ type: 'INCR' })}>Increase</button>
        </>
    )
}

export default Home;
import { useState } from "react";

const Home = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </>
    )
}

export default Home;
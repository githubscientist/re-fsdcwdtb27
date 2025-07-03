import { useContext } from "react";
import { CounterContext } from "../App";

const Button = () => {

    const { count, setCount } = useContext(CounterContext);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </>
    )
}

export default Button;
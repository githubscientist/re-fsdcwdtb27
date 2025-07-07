import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/features/counterSlice";

const Home = () => {
    const count = useSelector((state) => state.counter.count);

    const dispatch = useDispatch();

    console.log(count);
    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increase</button>
        </>
    )
}

export default Home;
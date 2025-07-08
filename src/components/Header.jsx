import { useContext } from "react";
import { AppContext } from "../App";

const Header = () => {

    const { likes, dislikes } = useContext(AppContext);

    return (
        <>
            <h1>Like and Dislike Counter</h1>
            <h2>Total Count: {likes + dislikes}</h2>
        </>
    )
}

export default Header;
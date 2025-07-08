import { Outlet } from "react-router";
import { useAppData } from "../contexts/AppContextComponent";

const Header = () => {

    const { likes, dislikes } = useAppData();

    return (
        <>
            <h1>Like and Dislike Counter</h1>
            <h2>Total Count: {likes + dislikes}</h2>
            <Outlet />
        </>
    )
}

export default Header;
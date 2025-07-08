import { Outlet, useOutletContext } from "react-router";

const Header = () => {

    const { likes, dislikes, handleLike, handleDislike } = useOutletContext();

    return (
        <>
            <h1>Like and Dislike Counter</h1>
            <h2>Total Count: {likes + dislikes}</h2>
            <Outlet
                context={{
                    likes,
                    dislikes,
                    handleLike,
                    handleDislike,
                }}
            />
        </>
    )
}

export default Header;
import { useState } from "react";
import { Outlet } from "react-router";

const Home = () => {

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    }

    const handleDislike = () => {
        setDislikes(dislikes + 1);
    }

    return (
        <>
            <h1>Home</h1>
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

export default Home;
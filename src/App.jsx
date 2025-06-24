import { useState } from "react";
const App = () => {

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    }

    const handleDisLike = () => {
        setDislikes(dislikes + 1);
    }

    return (
        <div>
            <h2>Likes: {likes}</h2>
            <h2>Dislikes: {dislikes}</h2>
            <button onClick={handleLike}>Like</button>
            &nbsp;&nbsp;
            <button onClick={handleDisLike}>DisLike</button>
        </div>
    )
}

export default App;
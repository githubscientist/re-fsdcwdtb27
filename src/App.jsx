import { useState } from "react";
const App = () => {

    const [reactions, setReactions] = useState({
        likes: 0,
        dislikes: 0
    });

    const handleLike = () => {
        setReactions({ likes: reactions.likes + 1, dislikes: reactions.dislikes });
        console.log('component re-rendered');
    }

    const handleDisLike = () => {
        setReactions({ likes: reactions.likes, dislikes: reactions.dislikes + 1 });
        console.log('component re-rendered');
    }

    console.log('component rendered');

    return (
        <div>
            <h2>Likes: {reactions.likes}</h2>
            <h2>Dislikes: {reactions.dislikes}</h2>
            <button onClick={handleLike}>Like</button>
            &nbsp;&nbsp;
            <button onClick={handleDisLike}>DisLike</button>
        </div>
    )
}

export default App;
import { useState } from "react";

const App = () => {

    const [likes, setLikes] = useState(0);

    const handleReaction = () => {
        setLikes(likes + 1);
    }

    return (
        <div>
            <h1>Likes: {likes}</h1>
            <button onClick={handleReaction}>Like</button>
        </div>
    )
}

export default App;
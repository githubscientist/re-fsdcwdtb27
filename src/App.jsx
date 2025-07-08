import { useState } from "react";

/*
    Props Drilling - Sending data from parent to deeply nested child components
*/
const App = () => {

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [likesHistory, setLikesHistory] = useState([]);

    const handleLike = () => {
        setLikes(likes + 1);
        setLikesHistory([...likesHistory, 'L']);
    };

    const handleDislike = () => {
        setDislikes(dislikes + 1);
        setLikesHistory([...likesHistory, 'D']);
    }

    return (
        <div>
            <button onClick={handleLike}>Like {likes}</button> <button onClick={handleDislike}>DisLike {dislikes}</button>
            <h3>History of Clicks</h3>
            <p>{likesHistory.join(', ')}</p>
        </div>
    )
}

export default App;

/*
    Like : L
    Dislike: D

    likesHistory = ['L', 'L', 'D']

    setLikesHistory([...likesHistory, 'L'])

    App
        - LikeComponent
        - 
*/
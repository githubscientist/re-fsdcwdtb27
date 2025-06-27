import { useState } from "react";
import Reactions from "./components/Reactions";

const App = () => {

    const [likes, setLikes] = useState(0);

    const handleReaction = () => {
        setLikes(likes + 1);
    }

    console.log('App component rendered');

    return (
        <div>
            <Reactions
                likes={likes}
            />
            <button onClick={handleReaction}>Like</button>
        </div>
    )
}

export default App;
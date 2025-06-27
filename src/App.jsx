import Reactions from "./components/Reactions";
import Buttons from "./components/Buttons";
import { useState } from "react";

const App = () => {

    const [likes, setLikes] = useState(0);

    const liftLikes = (newLikes) => {
        setLikes(newLikes);
    }

    return (
        <div>
            <Reactions
                likes={likes}
            />
            <Buttons
                liftLikes={liftLikes}
            />
        </div>
    )
}

export default App;
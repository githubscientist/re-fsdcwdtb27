import { useState } from "react";
import Reactions from "./components/Reactions";
import Buttons from "./components/Buttons";

const App = () => {

    const [likes, setLikes] = useState(0);

    return (
        <div>
            <Reactions
                likes={likes}
            />
            <Buttons
                likes={likes}
                setLikes={setLikes}
            />
        </div>
    )
}

export default App;
import { useState } from "react";

const Buttons = ({ liftLikes }) => {

    const [likes, setLikes] = useState(0);

    const handleReaction = () => {
        // asynchronous operation
        setLikes(likes + 1);
        liftLikes(likes + 1);
    }

    return (
        <>
            <button onClick={handleReaction}>Like</button>
        </>
    )
}

export default Buttons;
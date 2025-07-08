import { useContext } from "react";
import { AppContext } from "../App";

const Buttons = () => {

    const { likes, dislikes, handleLike, handleDislike } = useContext(AppContext);

    return (
        <>
            <button onClick={handleLike}>Like {likes}</button> <button onClick={handleDislike}>DisLike {dislikes}</button>
        </>
    )
}

export default Buttons;
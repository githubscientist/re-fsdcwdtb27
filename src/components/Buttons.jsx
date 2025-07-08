import { useContext } from "react";
import { AppContext } from "../contexts/AppContextComponent";

const Buttons = () => {

    const { likes, dislikes, handleLike, handleDislike } = useContext(AppContext);

    return (
        <>
            <button onClick={handleLike}>Like {likes}</button> <button onClick={handleDislike}>DisLike {dislikes}</button>
        </>
    )
}

export default Buttons;
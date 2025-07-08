import { useOutletContext } from "react-router";

const Buttons = () => {

    const { likes, dislikes, handleLike, handleDislike } = useOutletContext();

    return (
        <>
            <button onClick={handleLike}>Like {likes}</button> <button onClick={handleDislike}>DisLike {dislikes}</button>
        </>
    )
}

export default Buttons;
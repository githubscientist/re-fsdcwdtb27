import { useAppData } from "../contexts/AppContextComponent";

const Buttons = () => {

    const { likes, dislikes, handleLike, handleDislike } = useAppData();

    return (
        <>
            <button onClick={handleLike}>Like {likes}</button> <button onClick={handleDislike}>DisLike {dislikes}</button>
        </>
    )
}

export default Buttons;
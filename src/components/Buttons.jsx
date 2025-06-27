const Buttons = ({ likes, setLikes }) => {

    const handleReaction = () => {
        setLikes(likes + 1);
    }

    return (
        <>
            <button onClick={handleReaction}>Like</button>
        </>
    )
}

export default Buttons;
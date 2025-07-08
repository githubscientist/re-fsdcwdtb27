import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

const AppContextComponent = ({ children }) => {

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
        <AppContext.Provider value={{ likes, dislikes, likesHistory, handleLike, handleDislike }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextComponent;

export const useAppData = () => useContext(AppContext);
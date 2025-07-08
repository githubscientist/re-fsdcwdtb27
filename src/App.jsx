import { createContext, useState } from "react";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import History from "./components/History";

/*
    Props Drilling - Sending data from parent to deeply nested child components
*/

export const AppContext = createContext();

const App = () => {

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
            <div>
                <Header />
                <Buttons />
                <History />
            </div>
        </AppContext.Provider>
    )
}

export default App;

/*
    Like : L
    Dislike: D

    likesHistory = ['L', 'L', 'D']

    setLikesHistory([...likesHistory, 'L'])

    App
        - Header (h1 and h2)
        - Buttons (Like and Dislike)
        - History (h3 and p) - HistoryHeader & HistoryList
*/
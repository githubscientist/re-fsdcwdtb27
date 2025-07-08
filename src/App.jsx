import Header from "./components/Header";
import Buttons from "./components/Buttons";
import History from "./components/History";
import AppContextComponent from "./contexts/AppContextComponent";

/*
    Custom Hooks - Are the hooks that we create to encapsulate logic and state management or to provide reusable functionality across components.
*/

const App = () => {
    return (
        <AppContextComponent>
            <div>
                <Header />
                <Buttons />
                <History />
            </div>
        </AppContextComponent>
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
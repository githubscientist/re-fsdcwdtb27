import Header from "./components/Header";
import Paragraph from "./components/Paragraph";

// first component
// root component
function App() {

    let now = new Date();
    let time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

    // App: Parent Component
    // Header: Child Component for App
    // Paragraph: Child Component for App
    return (
        <>
            <Header />
            <Paragraph
                time={time}
            />
        </>
    )
}

export default App;
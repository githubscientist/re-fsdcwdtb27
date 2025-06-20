import Header from "./components/Header";
import Paragraph from "./components/Paragraph";

// first component
// root component
function App() {

    // App: Parent Component
    // Header: Child Component for App
    // Paragraph: Child Component for App
    return (
        <>
            <Header />
            <Paragraph />
        </>
    )
}

export default App;
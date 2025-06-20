import Header from "./components/Header";

function App() {
    // App: Parent Component
    // Header: Child Component

    let name1 = 'Krish';
    let name2 = 'Sathish';
    return (
        <>
            <Header
                name={name1}
            />
            <Header
                name={name2}
            />
        </>
    )
}

export default App;
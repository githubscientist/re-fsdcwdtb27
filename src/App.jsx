import Hello from "./components/Hello";

// create a component named App
function App() {

    const name = 'ABC';

    return (
        <>
            <Hello
                name={name}
                profession={'developer'}
            />
        </>
    )
}

// export the component App
export default App;
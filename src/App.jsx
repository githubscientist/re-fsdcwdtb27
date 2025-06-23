import Hello from "./components/Hello";

// create a component named App
function App() {

    function dataFromChild(name) {
        console.log('Function inside the parent component');
        console.log(name);
    }

    return (
        <>
            <Hello
                dataFromChild={dataFromChild}
            />
        </>
    )
}

// export the component App
export default App;
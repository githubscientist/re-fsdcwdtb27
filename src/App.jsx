// rendering -> means the component is inserted into the DOM
// re-rendering -> means the component is updated in the DOM
const App = () => {
    // ordinary variable
    // updating this variable will not cause the component to re-render
    // so the UI will not update
    // this is not reactive
    let count = 0;

    const handleIncrease = () => {
        count = count + 1;
        console.log('Count:', count);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

export default App;
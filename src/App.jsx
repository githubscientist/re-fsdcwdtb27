import { useEffect } from "react";

const App = () => {

    useEffect(() => {
        fetch(`https://685ac3af9f6ef9611157b188.mockapi.io/todos`)
            .then(response => response.json())
            .then(todos => console.log(todos));

    }, []);

    return (
        <div>App</div>
    )
}

export default App;
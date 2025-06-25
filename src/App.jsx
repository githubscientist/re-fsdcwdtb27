import { useEffect } from "react";

const App = () => {

    const fetchTodos = async () => {
        const response = await fetch(`https://685ac3af9f6ef9611157b188.mockapi.io/todos`);
        const todos = await response.json();
        console.log(todos);
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>App</div>
    )
}

export default App;
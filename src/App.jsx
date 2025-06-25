/*
    key prop: it is used to uniquely identify elements in a list.
*/

import { useEffect, useState } from "react";

const App = () => {

    const [todos, setTodos] = useState([]);

    // runs only once
    useEffect(() => {
        fetch(`https://685ac3af9f6ef9611157b188.mockapi.io/todos`)
            .then(response => response.json())
            .then(data => setTodos(data));
    }, []);

    console.log(todos);

    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {todos.map(todo => <li key={todo.id}>{todo.content}</li>)}
            </ul>
        </div>
    )
}

export default App;
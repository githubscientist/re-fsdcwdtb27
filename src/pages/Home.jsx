import { useState } from "react";

const Home = () => {

    const [todos, setTodos] = useState([]);

    console.log(todos);

    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.content}</li>
                ))}
            </ul>
        </div>
    )
}

export default Home;
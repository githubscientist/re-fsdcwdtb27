import axios from "axios";
import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";

const App = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get(`https://685ac3af9f6ef9611157b188.mockapi.io/todos`)
            .then(response => setTodos(response.data));
    }, []);

    console.log(todos);

    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {
                    todos.map(todo => (
                        <TodoItem
                            todo={todo}
                            key={todo.id}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default App;
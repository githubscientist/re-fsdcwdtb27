import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";

const Todo = () => {

    const [params] = useSearchParams();
    const [todo, setTodo] = useState({});
    const id = params.get("id");

    useEffect(() => {
        axios.get(`https://685ac3af9f6ef9611157b188.mockapi.io/todos/${id}`)
            .then(response => setTodo(response.data));
    }, []);

    // console.log(todo);

    return (
        <div>
            <h1>Todo</h1>
            <div>
                <h2>{todo.content}</h2>
                <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
                <p>Created At: {new Date(todo.createdAt).toLocaleString()}</p>
            </div>
        </div>
    )
}

export default Todo;
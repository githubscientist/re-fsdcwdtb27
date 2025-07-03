import { useLoaderData } from "react-router";

const Todo = () => {

    const todo = useLoaderData();

    return (
        <div>
            <h1>Todo Details</h1>
            <div>
                <h2>{todo.content}</h2>
                <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
                <p>Created At: {new Date(todo.createdAt).toLocaleString()}</p>
            </div>
        </div>
    )
}

export default Todo;
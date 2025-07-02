import { useLoaderData } from "react-router";

const Home = () => {

    const todos = useLoaderData();

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
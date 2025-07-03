import { useLoaderData } from "react-router";

const Home = () => {

    const todos = useLoaderData();

    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <a href="/todo">{todo.content}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;
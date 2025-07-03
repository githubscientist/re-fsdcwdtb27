import { useLoaderData } from "react-router";

const Home = () => {

    const todos = useLoaderData();

    console.log(todos);

    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <a href={"/todo" + "?id=" + todo.id}>{todo.content}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;
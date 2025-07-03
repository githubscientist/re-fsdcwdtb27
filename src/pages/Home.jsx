import { Link, useLoaderData } from "react-router";

const Home = () => {

    const todos = useLoaderData();

    console.log(todos);

    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <Link to={"/todo" + "/" + todo.id}>{todo.content}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;
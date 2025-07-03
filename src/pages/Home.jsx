import { Link, Outlet, useLoaderData } from "react-router";

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

            <Outlet />
            <p>Click on a todo to view details.</p>
        </div>
    )
}

export default Home;
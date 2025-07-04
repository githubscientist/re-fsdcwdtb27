import { Link, Outlet, useLoaderData } from "react-router";

const Home = () => {

    const todos = useLoaderData();

    console.log(todos);

    return (
        <div>
            <h1>Todos</h1>
            <p>Click on a todo to view details.</p>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <Link to={"/todo" + "/" + todo.id}>{todo.content}</Link>
                    </li>
                ))}
            </ul>

            <Outlet />
        </div>
    )
}

export default Home;
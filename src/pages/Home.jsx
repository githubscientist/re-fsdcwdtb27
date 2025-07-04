import { Link, Outlet, useLoaderData } from "react-router";

const Home = () => {

    const todos = useLoaderData();

    return (
        <div>
            <p>{'guest'} has logged in! <button>logout</button></p>
            <h1>Todos</h1>
            <p>Click on a todo to view detailed info of it!</p>
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
import { Link, useLoaderData } from "react-router";
import { useAuth } from "../contexts/UserContext";

const Home = () => {

    const { user, setUser } = useAuth();
    const todos = useLoaderData();

    return (
        <div>
            <p>{user.email ? user.email : 'Guest'} has logged in! <button onClick={user.email ? () => setUser({}) : () => setUser({ email: 'Alice@guvi.in' })}>{user.email ? 'logout' :
                'login'}</button></p>
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
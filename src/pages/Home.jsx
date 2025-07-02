import { useEffect, useState } from "react";

const Home = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(`https://685ac3af9f6ef9611157b188.mockapi.io/todos`)
            .then(response => response.json())
            .then(data => setTodos(data));
    }, []);

    console.log(todos);

    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    )
}

export default Home;
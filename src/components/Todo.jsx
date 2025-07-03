import { useParams } from "react-router";

const Todo = () => {

    const params = useParams();

    console.log(params);

    return (
        <div>
            <h1>Todo</h1>
        </div>
    )
}

export default Todo;
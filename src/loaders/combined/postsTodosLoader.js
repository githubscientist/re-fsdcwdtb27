import axios from "axios";
import todosLoader from "../unit/todosLoader";

const postsTodosLoader = async () => {
    try {
        const todos = await todosLoader();
        const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");

        return { todos, posts: posts.data }

    } catch (error) {
        return {};
    }
}

export default postsTodosLoader;
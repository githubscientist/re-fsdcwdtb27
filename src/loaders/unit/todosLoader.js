import axios from "axios";

const todosLoader = async () => {
    try {
        const response = await axios.get(`https://685ac3af9f6ef9611157b188.mockapi.io/todos`);
        return response.data;
    } catch (error) {
        return [];
    }
}

export default todosLoader;
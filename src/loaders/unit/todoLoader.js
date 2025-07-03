import axios from "axios";

const todoLoader = async ({ params, request }) => {
    try {
        const id = new URL(request.url).searchParams.get("id");
        const response = await axios.get(`https://685ac3af9f6ef9611157b188.mockapi.io/todos/${id}`)
        return response.data;
    } catch (error) {
        return {};
    }
}

export default todoLoader;
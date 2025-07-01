import { createBrowserRouter, RouterProvider } from "react-router-dom";

// create a router object
const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Home Page!</h1>
    },
    {
        path: "/courses",
        element: <h1>Courses Page!</h1>
    }
]);


const App = () => {
    return <RouterProvider
        router={router}
    />
}

export default App;
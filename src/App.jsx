import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import todosLoader from "./loaders/unit/todosLoader";
import Todo from "./components/Todo";
import todoLoader from "./loaders/unit/todoLoader";
import UserContext from "./contexts/UserContext";

const routes = [
    {
        path: "/",
        element: <Home />,
        loader: todosLoader,
        hydrateFallbackElement: <div>Loading...</div>,
    },
    {
        path: "/todo/:id",
        element: <Todo />,
        loader: todoLoader,
        hydrateFallbackElement: <div>Loading Todo...</div>,
    }
];


// create a router object
const router = createBrowserRouter(routes, {
    future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
    },
});

const App = () => {

    return (
        <UserContext>
            <RouterProvider
                router={router}
                future={{
                    v7_startTransition: true,
                }}
            />
        </UserContext>
    )
}

export default App;
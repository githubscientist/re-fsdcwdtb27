import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import todosLoader from "./loaders/unit/todosLoader";
import Todo from "./components/Todo";
import todoLoader from "./loaders/unit/todoLoader";
import { createContext, useState } from "react";

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

// 1. create a context to provide user data
export const UserContext = createContext();


const App = () => {

    const [user, setUser] = useState({
        name: 'Alice',
        email: 'alice@guvi.in'
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <RouterProvider
                router={router}
                future={{
                    v7_startTransition: true,
                }}
            />
        </UserContext.Provider>
    )
}

export default App;
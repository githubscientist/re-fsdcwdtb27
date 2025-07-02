import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import todosLoader from "./loaders/unit/todosLoader";

const routes = [
    {
        path: "/",
        element: <Home />,
        loader: todosLoader,
        hydrateFallbackElement: <div>Loading...</div>,
    },
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
    return <RouterProvider
        router={router}
        future={{
            v7_startTransition: true,
        }}
    />
}

export default App;
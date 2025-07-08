import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import Buttons from "./components/Buttons";

const routes = [
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "",
                element: <Header />,
                children: [
                    {
                        path: "",
                        element: <Buttons />
                    }
                ]
            },
        ]
    }
];

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
        <RouterProvider router={router} />
    )
}

export default App;
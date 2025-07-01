import { createBrowserRouter, RouterProvider } from "react-router";

const routes = [
    {
        path: "/",
        element: <h1>Home Page!</h1>
    },
    {
        path: "/courses",
        element: <h1>Courses Page!</h1>
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
    return <RouterProvider
        router={router}
        future={{
            v7_startTransition: true,
        }}
    />
}

export default App;
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "../pages/home";
import { Finalize } from "../pages/finalize";
import { Results } from "../pages/results";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/finalize/:id",
        element: <Finalize />
    },
    {
        path: "/results/:id",
        element: <Results />
    }
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
  };
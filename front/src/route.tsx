import { createBrowserRouter } from "react-router";
import Dashboard from "./pages/index";
import CreateBoard from "./pages/create-board";
import SharedBoards from "./pages/shared";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/create-board",
        element: <CreateBoard />
    },
    {
        path: "/shared",
        element: <SharedBoards />
    }
]);

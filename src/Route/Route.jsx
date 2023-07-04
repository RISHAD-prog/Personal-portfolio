import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Portfolio from "../Layout/Portfolio";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Portfolio></Portfolio>
            },

        ]
    },
]);

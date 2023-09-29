import { RouterProvider,  createBrowserRouter } from "react-router-dom";

import BookList from "./pages/BooksList";
import BookDetail from "./pages/BookDetail";
import App from "./App";
import NewBook from "./pages/NewBook/NewBook";

const createRouter = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <BookList />
            },
            {
                path: '/editar/:id',
                element: <BookDetail />
            },
            {
                path: '/novo',
                element: <NewBook />
            }
        ]
    }
])

function AppRoutes(){
    return (
        <RouterProvider router={createRouter}/>
    );
}

export default AppRoutes;
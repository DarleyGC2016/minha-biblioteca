import { BrowserRouter, Route, Routes } from "react-router-dom";

import BookList from "./pages/BooksList";
import BookDetail from "./pages/BookDetail";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BookList />}></Route>
                <Route path="/livros/:id" element={<BookDetail />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
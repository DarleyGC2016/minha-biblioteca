
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import BookList from "../pages/BooksList";

describe("index", () => {
    test('renders completamente', () => {
        render(<BookList />)
        expect(screen.getByText(/Carregando.../i)).toBeInTheDocument();
    });
})
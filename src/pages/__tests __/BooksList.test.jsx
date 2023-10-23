
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import BookList from "../BooksList";


describe("BookList", () => {

    test('renders completamente', () => {
        render(<BookList />)
        expect(screen.getByText(/Carregando.../i)).toBeInTheDocument();
    });

    test('delete()', () => {
        // const {} = render(<BookList />)


    })
})
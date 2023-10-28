
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import BookList from "../BooksList";

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => {
    return  {    
                useNavigate: () => mockNavigate
            }
})

describe("BookList", () => {
    test('renders completamente', () => {
        render(<BookList />)
        expect(screen.getByText(/Carregando.../i)).toBeInTheDocument();
    });
})
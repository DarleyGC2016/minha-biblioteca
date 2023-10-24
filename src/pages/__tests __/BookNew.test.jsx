import { render, screen } from "@testing-library/react"
import NewBook from "../NewBook/NewBook"
import "@testing-library/jest-dom"

const mockNavigate = jest.fn()
jest.mock('react-router', () => {
    return  {    
                useNavigate: () => mockNavigate
            }
})

describe("NewBook", () =>{
    it("render NewBook", () => {
        render(<NewBook />)
        expect(screen.getByTestId('novo-livro')).toBeInTheDocument();
    })
})
import { fireEvent, render, screen } from '@testing-library/react'
import BookDetail from '../BookDetail/index'
import "@testing-library/jest-dom"

const mockNavigate = jest.fn()
const mockParams = jest.fn()
jest.mock('react-router-dom', () => {
    return  {    
                useParams: () => mockParams,
                useNavigate: () => mockNavigate
            }
})

const renderComponent = () => {
    render(<BookDetail />)
}

describe("BookDetail", () => {
    it('render BookDetail', () => {
        renderComponent()
        expect(screen.getByText(/Carregando.../i)).toBeInTheDocument();
    })

    it("Cadastar novo Livro", () => {
        const btnSalvar = screen.getByText(/cancelar/i)
        renderComponent()
        fireEvent.submit(btnSalvar)
        expect(mockNavigate).toHaveBeenCalledWith("/")
    })
})
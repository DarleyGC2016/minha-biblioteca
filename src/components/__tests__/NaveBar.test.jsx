import { fireEvent, render, screen } from '@testing-library/react'
import NaveBar from '../navBar/NaveBar'
import "@testing-library/jest-dom"


const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => {
    return ( 
            jest.requireActual('react-router-dom'),
            { useNavigate: () => mockNavigate })
})

describe("NaveBar",() => {
    it("render NaveBar", () => {
        render(<NaveBar />)
        expect(screen.getByTestId('nav-bar')).toBeInTheDocument()
    })
    it("button Novo", () => {
        render(<NaveBar />)
        const btnCadastrar = screen.getByText(/Novo/i)
        fireEvent.click(btnCadastrar)
        expect(mockNavigate).toHaveBeenCalledWith("/novo")
    })
})
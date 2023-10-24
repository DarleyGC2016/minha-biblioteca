import { render, screen } from '@testing-library/react'
import BookDetail from '../BookDetail/index'
import "@testing-library/jest-dom"


const renderComponent = () => {
    render(<BookDetail />)
}

describe("BookDetail", () => {
    it('render BookDetail', () => {
        renderComponent()
        expect(screen.getByText(/Carregando.../i)).toBeInTheDocument()
    })

    
})
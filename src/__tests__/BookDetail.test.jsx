import { render, screen } from '@testing-library/react'
import BookDetail from '../pages/BookDetail/index'
import "@testing-library/jest-dom"
// import { useFetch } from '../hooks/useFetch'

const mockNavigate = jest.fn()
const mockParams = jest.fn()
jest.mock('react-router-dom', () => {
    return  {    
                useParams: () => mockParams,
                useNavigate: () => mockNavigate
            }
})
// const useFetchSpy = jest.spyOn(useFetch, "data");
const renderComponent = () => {
    render(<BookDetail />)
}
describe("BookDetail", () => {
    it('render BookDetail', () => {
        renderComponent()
        expect(screen.getByText(/Carregando.../i)).toBeInTheDocument();
    })
})
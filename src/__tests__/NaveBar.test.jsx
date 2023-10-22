import { render, screen } from '@testing-library/react'
import NaveBar from '../components/navBar/NaveBar'
import "@testing-library/jest-dom"

const mockNavigate = jest.fn()
const mockParams = jest.fn()

jest.mock('react-router-dom', () => {
    return  {    
                useParams: () => mockParams,
                useNavigate: () => mockNavigate
            }
})

describe("NaveBar",() => {
    it("render NaveBar", () => {
        render(<NaveBar />)
        expect(screen.getByTestId('nav-bar')).toBeInTheDocument()
    })
})
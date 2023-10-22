import { render, screen } from '@testing-library/react';
import App from '../App';
import "@testing-library/jest-dom"

const mockNavigate = jest.fn()
const mockParams = jest.fn()

jest.mock('react-router-dom', () => {
    return  {    
                useParams: () => mockParams,
                useNavigate: () => mockNavigate
            }
})

describe("App", ()=>{
    test('renders completamente', () => {
        render(<App />)
        expect(screen.getByTestId('app')).toBeInTheDocument();
    });
})


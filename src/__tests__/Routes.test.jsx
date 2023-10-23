import { render } from "@testing-library/react"
import AppRoutes from "../routes"
import "@testing-library/jest-dom"

describe('Routes', () => {
    it('render completa', ()=>{
        render(<AppRoutes />)
    })
})
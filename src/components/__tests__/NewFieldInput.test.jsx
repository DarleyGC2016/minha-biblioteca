import { render, screen } from "@testing-library/react"
import NewFieldInput from "../NewFieldInput/NewFieldInput"
import "@testing-library/jest-dom"

describe("NewFieldInput", () =>{
    it("render completo", () => {
        render(<NewFieldInput />)
        expect(screen.getByTestId('input')).toBeInTheDocument()
    })
})
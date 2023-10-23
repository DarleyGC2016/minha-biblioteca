import { render, screen } from "@testing-library/react"
import NewFieldTextArea from "../NewFieldTextArea/NewFieldTextArea"
import "@testing-library/jest-dom"

describe("NewFieldTextArea", () =>{
    it("render completo", () => {
        render(<NewFieldTextArea />)
        expect(screen.getByTestId('text-area')).toBeInTheDocument()
    })
})
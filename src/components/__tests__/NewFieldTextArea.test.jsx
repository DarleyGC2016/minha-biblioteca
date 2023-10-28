import { render, screen } from "@testing-library/react"
import NewFieldTextArea from "../NewFieldTextArea/NewFieldTextArea"
import { Typography } from "@mui/material"
import "@testing-library/jest-dom"

describe("NewFieldTextArea", () =>{
    it("render completo", () => {
        render(<Typography>
                    <NewFieldTextArea />
                </Typography>)
        expect(screen.getByTestId('text-area')).toBeInTheDocument()
    })
})
import { renderHook } from "@testing-library/react"
import { useCadatro } from "../../hooks/useCadatro"
import { faker } from '@faker-js/faker'

const mockNavigate = jest.fn()


jest.mock('react-router-dom', () => {
    return  {    
                useNavigate: () => mockNavigate
            }
})
describe('useCadastro()', () => { 
    it("renderizar hook useCadastro", () =>{
        const { result }= renderHook(useCadatro)
        expect(result.current.book.nome).toEqual('')
    })
    it("postBook", async () =>{
        const anoPublicacao = faker.string
        const {result} = renderHook(useCadatro)
        const spy = jest.spyOn(result.current,result.current.postBook)
        spy.mockReturnValue({
            nome: faker.string,
            anoPublicacao,
            autor: faker.string,
            sinopse: faker.string
        }) 

        expect(anoPublicacao).toBe(1010)
    })

 })
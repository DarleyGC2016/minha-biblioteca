import './estilo.css'
import { Link, useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { useCallback, useState } from "react"

import Api from "../../services/api"
import styled from 'styled-components'

const Painel = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const FormularioContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
export const Label = styled.label`
    width: 100%;
    padding: 30px 0;
    text-align: center;
`    
export const Input = styled.input` 
    display: flex  
    text-align: center;
    margin-top: 10px;
` 

function BookDetail() {
    const { id } = useParams()
    const { data, mutate } = useFetch(`livros/${id}`)
    const [nome, setNome] = useState('');

    const bookUpdate = useCallback(async (id, nome) => {
        Api.put(`livros/${id}`, {
            nome: nome
        })
        if (!data) {
            data?.map(livro => {
                if (livro.id === id){
                    mutate({...livro, nome: nome})
                    return livro;
                }
                return livro;
            })

            mutate(false) 
        }           
        
    },[ data, mutate ])

    if (!data) {
        return <p>Carregando...</p>
    }
    
    function cadastrar(e) {
        e.preventDefault();
        bookUpdate(id, nome);
    }
    
    return (
        <Painel>
            <FormularioContainer>
                <form onSubmit={cadastrar}>
                    <Label>Nome:</Label> <br/>
                    <Input type="text"                        
                        placeholder={data.nome}
                        value={nome}
                        onChange={ e => setNome(e.target.value)}
                    />
                    <Link to="/" className="btn">
                        Voltar
                    </Link>
                </form>
            </FormularioContainer>
        </Painel>
    )
}

export default BookDetail;
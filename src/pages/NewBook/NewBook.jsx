import { useState } from "react"
import { useNavigate } from "react-router"
import { Alert, Card } from "@mui/material"

import './estilo.css'
import { bookSchema } from "../../constants/bookSchema"
import Api from "../../services/api"
import Form from "../../components/Form/Form"

const NewBook = () => { 
  const [book, setBook] = useState({
    nome: '',
    anoPublicacao: '',
    autor: '',
    sinopse: ''
  })
  const [status, setStatus] = useState({
    type: '',
    message: ''
  })
  const navegacao = useNavigate()

  const postBook = async (e) => {
    e.preventDefault()
    
    if (!(await validacaoCampos())) return 

    Api.post(`/livros`, {
      nome: book.nome,
      anoPublicacao: book.anoPublicacao,
      autor: book.autor,
      sinopse: book.sinopse
    }) 
    setStatus({
      type: 'success',
      message: 'Cadastro realizado com sucesso'
    })     
    navegacao("/")

  }

  const validacaoCampos = async () => {
    try {
        await bookSchema.validate(book)
        return true
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.errors
      })
      return false
    }
  }
  const setNome = (e) =>{
    setBook({...book,nome: e.target.value})
  }

  const setAnoPublicacao = (e) => {
    setBook({...book, anoPublicacao: e.target.value})
  }

  const setAutor = (e) => {
    setBook({...book, autor: e.target.value})
  }

  const setSinopse = (e) => {
    setBook({...book, sinopse: e.target.value})
  }
  return (
    <div className="form-novo" data-testid="novo-livro">
        <Card sx={{ minWidth: 275 }}>
            {status.type === "error"? <Alert severity="error">{status.message}</Alert>: ""}
            <Form postBook={postBook}
                  book={book} 
                  setNome={setNome}
                  setAnoPublicacao={setAnoPublicacao}
                  setAutor={setAutor}
                  setSinopse={setSinopse}
            />
        </Card>
    </div>
  )
}

export default NewBook
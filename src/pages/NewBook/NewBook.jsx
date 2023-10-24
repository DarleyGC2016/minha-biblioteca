import { useState } from "react"
import { useNavigate } from "react-router"
import { Alert, Button, Card, CardActions, CardContent, Typography } from "@mui/material"

import './estilo.css'
import { bookSchema } from "../../constants/bookSchema"
import NewFieldInput from "../../components/NewFieldInput/NewFieldInput"
import NewFieldTextArea from "../../components/NewFieldTextArea/NewFieldTextArea"
import Api from "../../services/api"

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

  return (
    <div className="form-novo" data-testid="novo-livro">
        <Card sx={{ minWidth: 275 }}>
            {status.type === "error"? <Alert severity="error">{status.message}</Alert>: ""}
            <form onSubmit={(e) => postBook(e)}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <NewFieldInput 
                          label="Nome"
                          type="text"
                          name="nome"
                          id="nome"
                          placeholder="Digite o nome do livro..."
                          value={book.nome}
                          change={(e) => {
                              setBook({...book,nome: e.target.value})
                          }}/>
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <NewFieldInput 
                          label="Ano Publicado"
                          type="text"
                          name="pub"
                          id="pub"
                          placeholder="Digite ano da publicação..."
                          value={book.anoPublicacao}
                          change={(e) => {
                            setBook({...book, anoPublicacao: e.target.value})
                          }}
                          maxLength="4"
                        />
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <NewFieldInput 
                          label="Autor do Livro"
                          type="text"
                          name="autor"
                          id="autor"
                          placeholder="Digite o nome do autor..."
                          value={book.autor}
                          change={(e) => {
                            setBook({...book, autor: e.target.value})
                          }}
                        />
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      <NewFieldTextArea
                        label="Sinopse"
                        name="sinopse"
                        id="sinopse"
                        placeholder="Digite a sinopse do sinopse..."
                        value={book.sinopse}
                        change={(e) => {
                          setBook({...book, sinopse: e.target.value})
                        }}
                      />  
                  </Typography>
                </CardContent>
                <CardActions>
                        <Button sx={{ display: 'flex', justifyContent: "center",
                                      marginLeft: "15px", marginTop: '2px', marginBottom: '25px', width: 502}}
                                variant="contained"
                                type="submit"
                        >
                          Salvar
                        </Button>
                </CardActions>
            </form>
        </Card>
    </div>
  )
}

export default NewBook
import { useState } from "react"
import NewFieldInput from "../../components/NewFieldInput/NewFieldInput"
import NewFieldTextArea from "../../components/NewFieldTextArea/NewFieldTextArea"
import Api from "../../services/api"
import { useNavigate } from "react-router"
import * as yup from 'yup'

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
    let schemaValidacao = yup.object().shape({
      sinopse: yup.string("Sinopse está invalido!").required("Sinopse está invalido!"),
      autor: yup.string("Nome do autor está invalido!").required("Nome do autor está invalido!"),
      anoPublicacao: yup.string("Ano publicado está invalido!").matches("^[0-9]{4}$", "Ano publicado está invalido!").required("Ano publicado está invalido!"),
      nome: yup.string("Nome está invalido!").required("Nome está invalido!"),
    })
    try {
        await schemaValidacao.validate(book)
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
    <div>
      <form onSubmit={(e) => postBook(e)}>
        {status.type === 'error' ? <p style={{color: "#ff0000"}}>{status.message}</p>: ""}
        {status.type === 'success' ? <p style={{color: "blue"}}>{status.message}</p>: ""}
        <NewFieldInput 
            label="Nome:"
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite o nome do livro..."
            value={book.nome}
            maxLength="100"
            change={(e) => {
                setBook({...book,nome: e.target.value})
            }}/>
        <NewFieldInput 
            label="Ano Publicado:"
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
          <NewFieldInput 
              label="Autor do Livro:"
              type="text"
              name="autor"
              id="autor"
              placeholder="Digite o nome do autor..."
              value={book.autor}
              maxLength="100"
              change={(e) => {
                setBook({...book, autor: e.target.value})
              }}/>
          <NewFieldTextArea
            label="Sinopse:"
            name="sinopse"
            id="sinopse"
            placeholder="Digite a sinopse do sinopse..."
            value={book.sinopse}
            change={(e) => {
              setBook({...book, sinopse: e.target.value})
            }}
          />
          <input type="submit" value="Salvar" />
      </form>
    </div>
  )
}

export default NewBook
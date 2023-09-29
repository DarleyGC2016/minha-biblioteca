import { useState } from "react"
import NewFieldInput from "../../components/NewFieldInput/NewFieldInput"
import NewFieldTextArea from "../../components/NewFieldTextArea/NewFieldTextArea"
import Api from "../../services/api"
import { useNavigate } from "react-router"

const NewBook = () => {
  const [nome, setNome] = useState()
  const [anoPublicacao, setAnoPublicacao] = useState()
  const [autor, setAutor] = useState()
  const [sinopse, setSinopse] = useState()
  const navegacao = useNavigate()

  const postBook = (e) => {
    e.preventDefault();
    
    Api.post(`/livros`, {
      nome: nome,
      anoPublicacao: anoPublicacao,
      autor: autor,
      sinopse: sinopse
    })
    navegacao("/")
  }

  return (
    <div>
      <form onSubmit={(e) => postBook(e)}>
        <NewFieldInput 
            label="Nome:"
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite o nome do livro..."
            value={nome}
            maxLength="100"
            change={(e) => {
                setNome( e.target.value)
            }}/>
        <NewFieldInput 
            label="Ano Publicado:"
            type="text"
            name="pub"
            id="pub"
            placeholder="Digite ano da publicação..."
            value={anoPublicacao}
            change={(e) => {
              setAnoPublicacao(e.target.value)
            }}
            maxLength="4"
          />
          <NewFieldInput 
              label="Autor do Livro:"
              type="text"
              name="autor"
              id="autor"
              placeholder="Digite o nome do autor..."
              value={autor}
              maxLength="100"
              change={(e) => {
                  setAutor( e.target.value)
              }}/>
          <NewFieldTextArea
            label="Sinopse:"
            name="sinopse"
            id="sinopse"
            placeholder="Digite a sinopse do sinopse..."
            value={sinopse}
            change={(e) => {
                setSinopse( e.target.value)
            }}
          />
          <input type="submit" value="Salvar" />
      </form>
    </div>
  )
}

export default NewBook
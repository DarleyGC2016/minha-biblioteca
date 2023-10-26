import { Button, CardActions, CardContent } from "@mui/material"
import NewFieldInput from "../NewFieldInput/NewFieldInput"
import NewFieldTextArea from "../NewFieldTextArea/NewFieldTextArea"

const Form = ({
                postBook, 
                book,
                setNome,
                setAnoPublicacao,
                setAutor,
                setSinopse
                }) => {
    return (
        <form onSubmit={postBook}>
                <CardContent>
                    <NewFieldInput 
                        label="Nome"
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Digite o nome do livro..."
                        value={book.nome}
                        change={setNome}/>
                    <NewFieldInput 
                        label="Ano Publicado"
                        type="text"
                        name="pub"
                        id="pub"
                        placeholder="Digite ano da publicação..."
                        value={book.anoPublicacao}
                        change={setAnoPublicacao}
                        maxLength="4"
                    />
                    <NewFieldInput 
                        label="Autor do Livro"
                        type="text"
                        name="autor"
                        id="autor"
                        placeholder="Digite o nome do autor..."
                        value={book.autor}
                        change={setAutor}
                    />
                    <NewFieldTextArea
                        label="Sinopse"
                        name="sinopse"
                        id="sinopse"
                        placeholder="Digite a sinopse do sinopse..."
                        value={book.sinopse}
                        change={setSinopse}
                    />  
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
    )
  }
  
  export default Form
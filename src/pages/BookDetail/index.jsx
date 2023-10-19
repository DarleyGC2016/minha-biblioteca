// import './estilo.css
import { useNavigate, useParams } from "react-router-dom"
import { useCallback, useEffect, useState } from "react"

import Api from "../../services/api"
import { useFetch } from "../../hooks/useFetch";
import NewFieldInput from "../../components/NewFieldInput/NewFieldInput";
import NewFieldTextArea from "../../components/NewFieldTextArea/NewFieldTextArea";

import { Stack } from "@mui/material";
import Alert from '@mui/material/Alert';
import { bookSchema } from "../../constants/bookSchema";

function BookDetail() {
    const { id } = useParams()
    const [livro, setLivro] = useState();
    const [tempLivro, setTempLivro] = useState();
    const [changed, setChanged] = useState(false);
    const [status, setStatus] = useState({
        type: '',
        message: ''
    })
    const { data, mutate } = useFetch(`livros/${id}`)
    const navegacao = useNavigate()
    

    const getLivro = async (id) => {
        try {
            const resposta =  await Api.get(`/livros/${id}`)
            const data = resposta.data
            setLivro(data)
            setTempLivro(data)
        } catch (error) {
            console.log("Erro: ", error);
        } 
    }

    useEffect(() => {
        getLivro(id)     
        
    },[id])

    const editar = async (e) => {
        e.preventDefault(); 
        
        if (!(await validacaoCampos())) return        
        setChanged(false)
        bookUpdate(tempLivro)
        navegacao('/')
    }

    const bookUpdate = useCallback(async (livro) => {
        Api.put(`livros/${id}`, {
            nome: livro.nome,
            anoPublicacao: livro.anoPublicacao,
            autor: livro.autor,
            sinopse: livro.sinopse
        })
        if (!data) {
            data?.map(livro => {
                if (livro.id === id){
                    mutate({...livro, nome: livro.nome,
                            anoPublicacao: livro.anoPublicacao,
                            autor: livro.autor,
                            sinopse: livro.sinopse
                            })
                    return livro;
                }
                return livro;
            })

            mutate(false) 
        }           
        
    },[ id, data, mutate ])

    const validacaoCampos = async () => {
        try {
            await bookSchema.validate(tempLivro)
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
            <>
                {livro ?        
                    <form onSubmit={(e)=> editar(e)}> 
                        <Stack spacing={2} width={400}>  
                            {status.type === "error"? <Alert severity="error">{status.message}</Alert>: ""}
                            <NewFieldInput 
                                label="Nome"
                                type="text"
                                name="nome"
                                id="nome"
                                value={tempLivro.nome}
                                change={(e) => {
                                    setChanged(true);
                                    setTempLivro({...tempLivro , nome: e.currentTarget.value})
                                }}
                            />  
                            <NewFieldInput 
                                label="Publicação"
                                type="text"
                                name="publicacao"
                                id="publicacao"
                                placeholder="Digite o publicacao do livro..."
                                value={tempLivro.anoPublicacao}
                                change={(e) => {
                                    setChanged(true)
                                    setTempLivro({...tempLivro , anoPublicacao: e.currentTarget.value})
                                }}
                            />
                            <NewFieldInput 
                                label="Autor do Livro"
                                type="text"
                                name="autor"
                                id="autor"
                                value={tempLivro.autor}
                                change={(e) => {
                                    setChanged(true)
                                    setTempLivro({...tempLivro , autor: e.currentTarget.value})
                                }}
                            />  
                            <NewFieldTextArea
                                label="Sinopse"
                                name="sinopse"
                                id="sinopse"
                                value={tempLivro.sinopse}
                                change={(e) => {
                                    setChanged(true)
                                    setTempLivro({...tempLivro , sinopse: e.currentTarget.value})
                                }}
                            />                    
                            {changed ? 
                                <>
                                    <button onClick={(e) => {
                                        setTempLivro({...livro})
                                        setChanged(false)
                                    }}>Cancelar</button>
                                    <input type="submit" value="Salvar" />
                                </>
                            : null}
                        </Stack>
                    </form>
                : <p>Carregando...</p>}
            </>
    )
}

export default BookDetail;
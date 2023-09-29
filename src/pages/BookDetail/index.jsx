// import './estilo.css
import { useNavigate, useParams } from "react-router-dom"
import { useCallback, useEffect, useState } from "react"

import Api from "../../services/api"
import { useFetch } from "../../hooks/useFetch";

function BookDetail() {
    const { id } = useParams()
    const [livro, setLivro] = useState();
    const [tempLivro, setTempLivro] = useState();
    const [changed, setChanged] = useState(false);
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

    const editar = (e) => {
        e.preventDefault();        
        setChanged(false)
        bookUpdate(id, tempLivro.nome)
        navegacao('/')
    }

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

    return (
            <>
                {livro ?        
                    <form onSubmit={(e)=> editar(e)}> 
                        <div>
                            <label>Nome:</label>
                            <input 
                                type="text"
                                value={ tempLivro.nome }
                                onChange={(e) => {
                                                    setChanged(true);
                                                    setTempLivro({...tempLivro , nome: e.currentTarget.value})}
                                                }/> 
                        </div>                        
                        {changed ? 
                            <>
                                <button onClick={(e) => {
                                    setTempLivro({...livro})
                                    setChanged(false)
                                }}>Cancelar</button>
                                <input type="submit" value="Salvar" />
                            </>
                        : null}
                    </form>
                : <p>Carregando...</p>}
            </>
    )
}

export default BookDetail;
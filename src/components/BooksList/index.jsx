import { useCallback } from 'react'
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Api from "../../services/api"

function BookList() {
    const { data, mutate } = useFetch('livros');
    const bookUpdate = useCallback(async (id) => {
        Api.put(`livros/${id}`, {
            nome: 'Aprendendo a programar 8'
        })
        if (!data) {  
            data.map(livro =>{
                if (livro.id === id){
                    mutate({...livro, nome: 'Aprendendo a programar 8'})
                }
                mutate(false)
            })
        }
        
        
    },[ data, mutate ])
    
    if (!data) {
        return <p>Carregando...</p>
    }

    return (
        <ul>
            {
                data.map(livro => (
                    <li key={livro.id}>
                        <Link to={`/livros/${livro.id}`}>
                            {livro.nome}
                        </Link>
                        <button type="button" onClick={() => bookUpdate(livro.id)}>
                            Editar
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}

export default BookList;
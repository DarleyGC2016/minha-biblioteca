import { useCallback } from 'react'
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Api from "../../services/api"
import './estilo.css'

function BookList() {
    const { data, mutate } = useFetch('livros');

    const bookUpdate = useCallback(async (id) => {
        Api.delete(`livros/${id}`);
        data?.map(livro => {
            if (livro.id === id){
                mutate({...livro, nome: 'Aprendendo a programar 15'})
                return livro;
            }
            return livro;
        })

        mutate(false)            
        
    },[ data, mutate ])
    
    if (!data) {
        return <p>Carregando...</p>
    }

    return (  
        <div className='lista'>
                <ul className='listagem'>
                    {
                        data.map(livro => (
                            <li key={livro.id} className='item'>
                                {livro.nome}
                                <Link to={`/livros/${livro.id}`} className='btn'>
                                    Editar   
                                </Link>
                                <button type="button" className='btn-excluir' onClick={() => bookUpdate(livro.id)}>
                                    Excluir
                                </button>
                            </li>
                        ))
                    }
                </ul>
        </div>      
        
    )
}

export default BookList;
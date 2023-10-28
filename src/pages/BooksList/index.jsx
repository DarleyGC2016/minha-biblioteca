import './estilo.css'
import { useList } from '../../hooks/useList';
import Listar from "../../components/Listar/Listar";

const BookList = () => {
    
    const { livros, deleteBook, carregar } = useList();

    return ( 
        <div className='listagem'>
            {!livros ?  carregar() : 
                <Listar 
                    livros={livros}
                    deleteBook={deleteBook}
                />
            }
        </div>
    )
}

export default BookList;
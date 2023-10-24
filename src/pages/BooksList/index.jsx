import { useCallback } from 'react'
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import Api from "../../services/api"
import './estilo.css'
import { Alert, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { blue, red } from '@mui/material/colors';

function BookList() {
    const { data, mutate } = useFetch('livros');

    const deleteBook = useCallback(async (id) => {
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
        return (
                    <div className='listagem'>
                        <Alert severity="info" sx={{ display: 'flex', width: 702}}>
                            Carregando...
                        </Alert>
                    </div>
                )
    }

    return ( 
        <div className='listagem'>
            <List
                sx={{
                width: '100%',
                maxWidth: 760,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,
                justifyContent: 'center',
                justifyItems: 'center',
                alignItems: 'center',
                '& ul': { padding: 0 },
                }}
                subheader={<li />}
            >

            {data.map((livro) => (
                <li key={`section-${livro.id}`}>
                    <ul data-testid="excluir">
                        <ListItem key={livro.id}>
                            <ListItemText primary={livro.nome} />
                            <IconButton edge="end" aria-label="edit">
                                <Link to={`/editar/${livro.id}`}> 
                                    <EditIcon sx={{color: blue[500]}}/>
                                </Link>
                            </IconButton>
                            <IconButton  onClick={() => deleteBook(livro.id)}>
                                    <DeleteIcon sx={{color: red[500]}}/>
                            </IconButton>
                        </ListItem>
                    </ul>
                </li>
            ))}
            </List>
        </div>
    )
}

export default BookList;
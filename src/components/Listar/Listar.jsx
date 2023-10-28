import { IconButton, List, ListItem, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { blue, red } from '@mui/material/colors';

const Listar = ({livros, deleteBook}) => {
    return (
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

        {livros.map((livro) => (
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
    )
}

export default Listar
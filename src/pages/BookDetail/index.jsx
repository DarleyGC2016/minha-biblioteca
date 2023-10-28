import { Alert, Card} from '@mui/material';
import './estilo.css'

import { useEdit } from "../../hooks/useEdit";
import { useParams } from 'react-router-dom';
import FormEdit from '../../components/FormEdit/FormEdit';

function BookDetail() {
    const { id } = useParams()
    const {            
        livro,
        tempLivro,
        status,
        changed,
        editar,
        setNome,
        setAnoPublicacao,
        setAutor,
        setSinopse,
        setCancelar} = useEdit(id)

    return (
            <div className="form-editar">
                {livro && tempLivro ?        
                    <Card sx={{ minWidth: 275 }}>
                        {status.type === "error"? <Alert severity="error">{status.message}</Alert>: ""}
                        <FormEdit 
                            book={tempLivro}
                            editar={editar} 
                            setNome={setNome}
                            setAnoPublicacao={setAnoPublicacao}
                            setAutor={setAutor}
                            setSinopse={setSinopse}
                            changed={changed}
                            setCancelar={setCancelar}
                        />
                    </Card>
                  : <Alert severity="info" sx={{ display: 'flex', width: 702}}>Carregando...</Alert>}
            </div>
    )
}

export default BookDetail;
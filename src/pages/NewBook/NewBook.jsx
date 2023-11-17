'use client'

import { Alert, Card } from "@mui/material"
import './estilo.css'
import Form from "../../components/Form/Form"
import { useCadatro } from "../../hooks/useCadatro"

const NewBook = () => { 
    const {postBook,
            book,
            setNome,
            setAnoPublicacao,
            setAutor,
            setSinopse,
            status }  = useCadatro()


  return (
    <div className="form-novo" data-testid="novo-livro">
        <Card sx={{ minWidth: 275 }}>
            {status.type === "error"? <Alert severity="error">{status.message}</Alert>: ""}
            <Form postBook={postBook}
                  book={book} 
                  setNome={setNome}
                  setAnoPublicacao={setAnoPublicacao}
                  setAutor={setAutor}
                  setSinopse={setSinopse}
            />
        </Card>
    </div>
  )
}

export default NewBook
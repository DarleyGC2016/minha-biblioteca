import { Button, CardActions, CardContent, Stack } from '@mui/material';
import React from 'react'
import NewFieldInput from '../NewFieldInput/NewFieldInput';
import NewFieldTextArea from '../NewFieldTextArea/NewFieldTextArea';
import { red } from "@mui/material/colors";

const FormEdit = ({ 
                    book,
                    editar,
                    setNome, 
                    setAnoPublicacao, 
                    setAutor,
                    setSinopse, 
                    changed, 
                    setCancelar
                }) => {
    return (
        <form onSubmit={editar}> 
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
            {changed ?
                <CardActions>
                    <Stack>
                        <Button type="submit"
                            sx={{ display: 'flex', justifyContent: "center",
                            marginLeft: "15px", marginTop: '2px', marginBottom: '25px' , width: 502}}
                            variant="contained">Salvar</Button> 
                        <Button
                            sx={{ display: 'flex', justifyContent: "center",
                            marginLeft: "15px", marginTop: '2px', marginBottom: '25px' , width: 502, backgroundColor: red[500]}}
                            variant="contained"
                            onClick={setCancelar}
                        >
                            Cancelar
                        </Button>
                    </Stack>
                </CardActions> 
            : null}
        </form>
    )
}

export default FormEdit
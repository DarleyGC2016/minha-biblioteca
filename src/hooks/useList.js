import { Alert } from "@mui/material";
import { useCallback } from "react";
import Api from "../services/api";
import { useFetch } from "./useFetch";

export const useList = () => {
    const { data, mutate } = useFetch('livros');

    const deleteBook = useCallback(async (id) => {
        console.log(data);
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

    const carregar = () => {
        return (
                    <div className='listagem'>
                        <Alert severity="info" sx={{ display: 'flex', width: 702}}>
                            Carregando...
                        </Alert>
                    </div>
                )
    }

    return {
        livros: data,
        deleteBook,
        carregar
    }
}

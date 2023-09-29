import { useParams } from "react-router-dom";
import Api from "../services/api";
import { useEffect, useState } from "react";

export function useLivro(url) {
    const { id } = useParams()
    const [livro, setLivro] = useState('')
    const getLivro = async () => {
            try {
                const resposta = await Api.get(`/${url}/${id}`)
                console.log('resposta: ',resposta.data);
                setLivro(resposta.data.nome)
                console.log('´',livro);
            } catch (error) {
                console.log("Erro: ", error);
            }  
    }

    useEffect(() => {

        getLivro()
    })
    
    return (livro);
}

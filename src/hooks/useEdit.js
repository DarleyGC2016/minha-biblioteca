import { useCallback, useEffect, useState } from 'react'
import Api from '../services/api'
import { useNavigate } from 'react-router-dom'
import { bookSchema } from '../constants/bookSchema'
import { useFetch } from './useFetch'

export const useEdit = (id) => {
    const [livro, setLivro] = useState({
        nome: '',
        anoPublicacao: '',
        autor: '',
        sinopse: ''
    })
    const [tempLivro, setTempLivro] = useState();
    const [changed, setChanged] = useState(false);  
    const [status, setStatus] = useState({
        type: '',
        message: ''
    })
    const { data, mutate } = useFetch(`livros/${id}`)
    const navegacao = useNavigate()

    const editar = async (e) => {
        e.preventDefault(); 
        
        if (!(await validacaoCampos())) return        
        setChanged(false)
        bookUpdate(tempLivro)
        navegacao('/')
    }

    const bookUpdate = useCallback(async (livro) => {
        Api.put(`livros/${id}`, {
            nome: livro.nome,
            anoPublicacao: livro.anoPublicacao,
            autor: livro.autor,
            sinopse: livro.sinopse
        })
        if (!data) {
            data?.map(livro => {
                if (livro.id === id){
                    mutate({...livro, nome: livro.nome,
                            anoPublicacao: livro.anoPublicacao,
                            autor: livro.autor,
                            sinopse: livro.sinopse
                            })
                    return livro;
                }
                return livro;
            })

            mutate(false) 
        }           
        
    },[ id, data, mutate ])

    const validacaoCampos = async () => {
        try {
            await bookSchema.validate(tempLivro)
            return true
        } catch (error) {
            setStatus({
                type: 'error',
                message: error.errors                    
            })
            return false
        }
    }  

    const setNome = (e) =>{
        setTempLivro({...livro,nome: e.target.value})
        setChanged(true)
    }

    const setAnoPublicacao = (e) => {
    setTempLivro({...livro, anoPublicacao: e.target.value})
    setChanged(true)
    }

    const setAutor = (e) => {
    setTempLivro({...livro, autor: e.target.value})
    setChanged(true)
    }

    const setSinopse = (e) => {
        setTempLivro({...livro, sinopse: e.target.value})
        setChanged(true)
    } 
    const setCancelar = (e) => {
        setTempLivro({...livro})
        setChanged(true)
    } 

    const getLivro = async (id) => {
        try {
            const resposta =  await Api.get(`/livros/${id}`)
            const data = resposta.data
            setLivro(data)
            setTempLivro(data)
        } catch (error) {
            console.log("Erro: ", error);
        } 
    }

    useEffect(() => {
        getLivro(id) 
    },[id])

    return {
            livro,
            tempLivro,
            status,
            changed,
            editar,
            setNome,
            setAnoPublicacao,
            setAutor,
            setSinopse,
            setCancelar
    }
}

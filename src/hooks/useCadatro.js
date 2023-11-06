import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../services/api'
import { bookSchema } from '../constants/bookSchema'

export const useCadatro = () => {
    const [book, setBook] = useState({
        nome: '',
        anoPublicacao: '',
        autor: '',
        sinopse: ''
      })
    const navegacao = useNavigate()
    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const postBook = async (e) => {
        e.preventDefault()
        
        if (!(await validacaoCampos())) return 
    
        Api.post(`/livros`, {
          nome: book.nome,
          anoPublicacao: book.anoPublicacao,
          autor: book.autor,
          sinopse: book.sinopse
        })   
        navegacao("/")
    
      }
    
      const validacaoCampos = async () => {
        try {
            await bookSchema.validate(book)
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
        setBook({...book,nome: e.target.value})
      }
    
      const setAnoPublicacao = (e) => {
        setBook({...book, anoPublicacao: e.target.value})
      }
    
      const setAutor = (e) => {
        setBook({...book, autor: e.target.value})
      }
    
      const setSinopse = (e) => {
        setBook({...book, sinopse: e.target.value})
      }    

  return {
      postBook,
      book,
      setNome,
      setAnoPublicacao,
      setAutor,
      setSinopse,
      status
  }
}

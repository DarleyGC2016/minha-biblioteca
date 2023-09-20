import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

function BookDetail() {
    const { id } = useParams()
    const { data } = useFetch(`livros/${id}`)

    if (!data) {
        return <p>Carregando...</p>
    }

    return (
        <ul>
            <li>Id: {data?.id}</li>
            <li>Nome: {data?.nome}</li>
        </ul>
    )
}

export default BookDetail;
import * as yup from 'yup'

export const bookSchema = yup.object().shape({
    sinopse: yup.string()
        .required()
        .min(15, "A sinopse tem ser maior que 15 letras")
        .max(200, 'Passo do máximo permitido'),
    autor: yup.string()
            .required()
            .min(6, "Nome do autor tem ser maior que 6 letras")
            .max(80, 'Passo do máximo permitido'),
    anoPublicacao: yup.string()
                    .matches("^[0-9]{4}$", "Ano publicado está invalido!")
                    .required("Ano publicado está invalido!"),
    nome: yup.string()
            .required()
            .min(6, "Nome do livro tem ser maior que 6 letras")
            .max(150, 'Passo do máximo permitido')
})

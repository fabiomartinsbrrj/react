import { combineReducers } from 'redux'

//Responsavel por retornar o estado atualizado
const rootReducer = combineReducers ({
    todo : () => ({
        description : 'Ler livro',
        list : [
            {
                _id: 1,
                description: 'Pagar fatura do cartão',
                done:true
            },
            {
                _id:2,
                description : 'Reunião com a equipe as 10',
                done : false
            },
            {
                _id:3,
                description : 'Consulta médica',
                done : false
            }
        ]
    })// se eu colocar somente a chave ele vai pensar que é um corpo do  objto com parenteses ele entende que é um expressão
})

export default rootReducer
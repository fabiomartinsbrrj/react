import { combineReducers } from 'redux'

import todoReducer from '../todo/todoReducer'

//Responsavel por retornar o estado atualizado
const rootReducer = combineReducers ({
    todo : todoReducer
    // se eu colocar somente a chave ele vai pensar que é um corpo do  objto com parenteses ele entende que é um expressão
})

export default rootReducer
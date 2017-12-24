const INITIAL_VALUE = {
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
}

export default (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED': 
            return { ...state, description : action.payload}
        default:
            return state
    }
}
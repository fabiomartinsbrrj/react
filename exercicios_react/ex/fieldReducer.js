const INITIAL_STATE = { value : 'Opa'}

export default function (state = INITIAL_STATE, action) {
    switch (action.type ) {
        case 'VALUE_CHANGED':
            //state.value = action.payload; -> altera o estado atual
            return { value : action.payload } //crio um  novo obj e nao altero o estado
        default:
            return state; 
    } 
}
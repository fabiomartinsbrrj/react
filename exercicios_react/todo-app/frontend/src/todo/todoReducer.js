const INITIAL_VALUE = {description : '', list : []}

export default (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED': 
            return { ...state, description : action.payload}
        case 'TODO_SEARCHED':
            return { ...state, list : action.payload }
        case 'TODO_CLEAR':
            return { ...state, description : '' }
        default:
            return state
    }
}
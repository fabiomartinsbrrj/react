export function changevalue(e) {

    return {
        type : 'VALUE_CHANGED',/*Obrigatorio*/
        payload : e.target.value
    }
}
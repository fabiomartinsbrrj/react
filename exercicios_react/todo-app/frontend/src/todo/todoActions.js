export const changeDescritption = (event ) => ({
    type:'DESCRIPTION_CHANGED',
    payload: event.target.value
})
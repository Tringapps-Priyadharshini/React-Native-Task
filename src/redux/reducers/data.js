const initialState = {
    data: null
}
const data = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA': return action.payload
        default: return state
    }
}
export default data;


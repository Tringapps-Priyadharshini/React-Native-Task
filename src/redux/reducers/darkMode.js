const initialState = {
    darkMode:false,
}

const mode = (state=initialState,action) => {
    switch(action.type){
        case 'DARK_MODE': 
            return action.payload
        default:
            return state
    }
}
export default mode;
const initialState = {
    email:''
}
const email = (state = initialState,action) => {
    switch(action.type){
        case 'EMAIL':return action.payload;
        default: return state;
    }
}
export default email;
const cartData = (state=[],action) => {
    switch(action.type){
        case 'CART_DATA':
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}
export default cartData;
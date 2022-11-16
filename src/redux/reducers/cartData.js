const cartData = (state = [], action) => {
    switch (action.type) {
        case 'CART_DATA':
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}    

// import { REHYDRATE } from "redux-persist/lib/constants";

// const cartData = (state = [], action) => {
//     switch (action.type) {
//         case REHYDRATE:
//             return [
//                 ...state,
//                 action.payload
//             ]
//         default:
//             return state;
//     }
// }
export default cartData;
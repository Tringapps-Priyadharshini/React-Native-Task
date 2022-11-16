const initialState = {
    detail: null
}

const particularDetail = (state = initialState, action) => {
    switch (action.type) {
        case 'PARTICULAR_DETAIL': return action.payload;
        default: return state;
    }
}
export default particularDetail;
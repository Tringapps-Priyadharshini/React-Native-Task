export const email = (userEmail) => {
    return{
        type:'EMAIL',
        payload:userEmail
    }
}

export const data = () => {
    return{
        type:'DATA',
    }
}

export const particularDetail = (data) => {
    return{
        type:'PARTICULAR_DETAIL',
        payload:data
    }
}

export const cartData = (data)=>{
    return{
        type:'CART_DATA',
        payload:data
    }
}

export const darkMode = (mode) => {
    return{
        type:'DARK_MODE',
        payload:mode,
    }
}



import { ADD_TO_CART } from "../Constants"

export const AddtoCart = (data) => {
    return{
        type : ADD_TO_CART,
        data : data
    }
}

export const RemoveCart = (data) => {
    return {
        type : 'REMOVE_CART',
        data 
    }
}
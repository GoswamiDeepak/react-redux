import { ADD_TO_CART } from "../Constants"
import { REMOVE_CART } from "../Constants";

export const AddtoCart = (data) => {
    console.log('action',data) ;

    return{
        type : ADD_TO_CART,
        data : data
    }
}

export const RemoveCart = (data) => {
    console.log('action',data); 
    return {
        type : REMOVE_CART,
        data : data
    }
}
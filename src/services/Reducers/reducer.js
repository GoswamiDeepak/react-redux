import { ADD_TO_CART } from "../Constants";
import { REMOVE_CART } from "../Constants";

const initialState = {
    cartData :[]
}

export default function cartItem(state =[], action) {
    switch(action.type) {
        case ADD_TO_CART :
            console.log("reducer",action)
            return [
                ...state,
                {cartData : action.data}
            ]
        break ; 

        case REMOVE_CART :
            console.log("reducer",action)
            return [
                ...state,
                {cartData : action.data}
            ]
        break ; 

        default : 
        return  state
    }
}
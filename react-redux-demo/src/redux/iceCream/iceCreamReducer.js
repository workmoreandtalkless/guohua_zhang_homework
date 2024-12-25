// import { BUY_CAKE } from "../cake/cakeTypes";
import { BUY_ICECREAM } from "../iceCream/iceCreamTypes";
import { buyIceCream } from "./iceCreamAction";

const initialState = {  // initial state
    numOfIceCreams: 20
}

 const iceCreamReducer = (state = initialState,action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

export default iceCreamReducer
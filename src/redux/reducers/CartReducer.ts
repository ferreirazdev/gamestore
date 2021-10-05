import { 
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  CartReducerState,
  CartActions
} from "../@types";

//Initital State
const cartFromLocal = localStorage.getItem('cart')

let initialCart: [] = []

if(cartFromLocal){
  initialCart = JSON.parse(cartFromLocal)
}

const initState: CartReducerState = {
  cart: initialCart
}

//Cart Reducer
export default function cartReducer(
  state: CartReducerState = initState, action: CartActions): CartReducerState{
    switch(action.type){
      case ADD_PRODUCT_TO_CART: {
        const product = action.payload

        const cartProduct = [...state.cart, product]
        localStorage.setItem('cart', JSON.stringify(cartProduct))
        return {
          ...state,
          cart: [...state.cart, product]
        }
      }


      case REMOVE_PRODUCT_FROM_CART: {
        const payloadProduct = action.payload
        const tempCart = state.cart.filter(product => product !== payloadProduct)

        const cartProduct = [...tempCart]
        localStorage.setItem('cart', JSON.stringify(cartProduct))
        return {
          ...state,
          cart: [...tempCart]
        }
      }

      
      default:
        return state;
    }
}
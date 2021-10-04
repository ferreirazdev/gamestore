import { 
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_SUCCESS,
  ProductReducerState

} from "../@types";

const initiState: ProductReducerState = {
  products: [],
  isLoading: false,
  error: ''
}

export default function productReducer(state: ProductReducerState = initiState, action: any){
  switch(action.type){
    case FETCH_PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true
      }

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        error: '',
      }

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    default:
      return state
  }
}
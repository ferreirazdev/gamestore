import { combineReducers } from "redux";

import productReducer from './ProductReducer'
import cartReducer from './CartReducer'
import uiReducer from './UiReducer'

const rootReducer = () => 
  combineReducers({
    productReducer,
    cartReducer,
    uiReducer
  })

export default rootReducer;
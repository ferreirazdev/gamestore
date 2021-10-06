import { CartReducerState } from "./CartTypes";
import { ProductReducerState } from "./ProductTypes";
import { UiReducerState } from "./UiTypes";

export * from './ProductTypes'
export * from './CartTypes'
export * from './UiTypes'

export type AppState = {
  productReducer: ProductReducerState
  cartReducer: CartReducerState
  uiReducer:UiReducerState
}
import { CartReducerState } from "./CartTypes";
import { ProductReducerState } from "./ProductTypes";

export * from './ProductTypes'
export * from './CartTypes'

export type AppState = {
  productReducer: ProductReducerState
  cartReducer: CartReducerState
}
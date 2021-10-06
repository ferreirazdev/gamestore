export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'

export type CartProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
  score: number;
}

export type CartReducerState = {
  cart: CartProduct[]
}

//Actions 
export type AddProductToCartAction = {
  type: typeof ADD_PRODUCT_TO_CART
  payload: CartProduct
}

export type RemoveProductFromCartAction = {
  type: typeof REMOVE_PRODUCT_FROM_CART
  payload: CartProduct
}

export type CartActions = AddProductToCartAction | RemoveProductFromCartAction
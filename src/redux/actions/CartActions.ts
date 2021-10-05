import { ADD_PRODUCT_TO_CART, CartActions, CartProduct, REMOVE_PRODUCT_FROM_CART } from "../@types";


export function addProductToCart(product: CartProduct): CartActions {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product
  }
}

export function removeProductFromCart(product: CartProduct): CartActions {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: product
  }
}
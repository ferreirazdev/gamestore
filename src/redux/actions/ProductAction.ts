import { Dispatch } from "redux";
import api from "../../services/api";

import { 
  FETCH_PRODUCTS_FAILURE, 
  FETCH_PRODUCTS_LOADING, 
  FETCH_PRODUCTS_SUCCESS, 
  ProductActions 
} from "../@types";

export function fetchAllProductsLoading(): ProductActions{
  return {
    type: FETCH_PRODUCTS_LOADING
  }
}

export function fetchAllProductsSuccess(products: []): ProductActions{
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
}

export function fetchAllProductsFailure(error: string): ProductActions{
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  }
}

export function fetchAllProducts(){
  return (dispatch: Dispatch) => {
    dispatch(fetchAllProductsLoading())

    api.get('/products').then((res) => {
      const products = res.data
      dispatch(fetchAllProductsSuccess(products))
    }).catch((err) => {
      dispatch(fetchAllProductsFailure(err))
    })
  }
}
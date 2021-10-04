export const FETCH_PRODUCTS_LOADING="FETCH_PRODUCTS_LOADING"
export const FETCH_PRODUCTS_SUCCESS="FETCH_PRODUCTS_SUCCESS"
export const FETCH_PRODUCTS_FAILURE="FETCH_PRODUCTS_FAILURE"


//Types
export type ProductReducerState = {
  products: [];
  isLoading:boolean;
  error:string;
}

export type ProductState = {
  id: number;
  name: string;
  price: number;
  image: string;
}

//Action Types
export type FetchAllProductsLoadingAction={
  type: typeof FETCH_PRODUCTS_LOADING
  payload?: string
}
export type FetchAllProductsSuccessAction={
  type: typeof FETCH_PRODUCTS_SUCCESS
  payload: []
}
export type FetchAllProductsFailureAction={
  type: typeof FETCH_PRODUCTS_FAILURE
  payload: string
}

export type ProductActions = FetchAllProductsLoadingAction | FetchAllProductsSuccessAction | FetchAllProductsFailureAction
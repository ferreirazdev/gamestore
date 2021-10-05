import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ProductCard } from "../../components/ProductCard"
import { AppState, CartProduct, ProductState } from "../../redux/@types"
import { fetchAllProducts, removeProductFromCart } from "../../redux/actions"



export function Checkout(){

  const cart = useSelector((state: AppState) => state.cartReducer.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  
  return (
    <div>
      <div>Checkout</div>
      {cart && cart.map((product: any) =>(
        <div>
          <ProductCard 
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              onClick={() => dispatch(removeProductFromCart(product))}
              buttonTitle="remover"
            />
        </div>
      ))}
    </div>
  )
}
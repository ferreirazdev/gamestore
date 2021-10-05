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

  
  const cartTotal = {
    subTotal: 0,
    freight: 10,
    total: 0
  }

  
  function makeSum(){
    const price = cart.map((product: any) => (
      product.price
    ))
    for (let i = 0; i < price.length; i++){
      cartTotal.subTotal += price[i]
    }
    if(cart.length > 0 && cartTotal.subTotal <= 250){
      cartTotal.freight = cartTotal.freight * cart.length
    } else {
      cartTotal.freight = 0
    }
    cartTotal.total = cartTotal.subTotal + cartTotal.freight

  }
  makeSum()

  const formatedData = {
    formatedSubTotal: cartTotal.subTotal
      .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
    formatedFreight: cartTotal.freight
      .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
    formatedTotal: cartTotal.total
      .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
  }
  
  console.log(cartTotal.total, cartTotal.subTotal, cartTotal.freight)
  

  return (
    <div>
      <div>Checkout</div>
      <h1>Subtotal</h1>
      <h1>{formatedData.formatedSubTotal}</h1>
      <h1>Frete</h1>
      <h1>{formatedData.formatedFreight}</h1>
      <h1>Total</h1>
      <h1>{formatedData.formatedTotal}</h1>
      {cart && cart.map((product: CartProduct) =>(
          <ProductCard 
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              onClick={() => dispatch(removeProductFromCart(product))}
              buttonTitle="remover"
            />
      ))}
    </div>
  )
}
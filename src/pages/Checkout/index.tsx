import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CheckoutProductCard } from "../../components/CheckoutProductCard"
import { ProductCard } from "../../components/ProductCard"
import { AppState, CartProduct, ProductState } from "../../redux/@types"
import { fetchAllProducts, removeProductFromCart } from "../../redux/actions"

import {
  Button,
  Container,
  ItemContainer,
  ItemWrapper,
  PurchaseConfirmationContainer,
  PurchaseConfirmationWrapper
} from './styles'


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
    <Container>
      <ItemContainer>
        <ItemWrapper>
          {cart && cart.map((product: any) =>(
              <CheckoutProductCard 
                name={product.name}
                price={product.price}
                score={product.score}
                image={product.image}
                onClick={() => dispatch(removeProductFromCart(product))}
                buttonTitle="Remover do Carrinho"
               />
          ))}
        </ItemWrapper>
      </ItemContainer>
      <PurchaseConfirmationContainer>
        <PurchaseConfirmationWrapper>
          <h1 className="title">Confirme sua compra</h1>
          <div className="infoPurchase">
            <h1>Subtotal:</h1>
            <p>{formatedData.formatedSubTotal}</p>
          </div>
          <div className="infoPurchase">
            <h1>Frete:</h1>
            <p>{formatedData.formatedFreight}</p>
          </div>
          <div className="infoPurchase">
            <h1>Total:</h1>
            <p className="total">{formatedData.formatedTotal}</p>
          </div>
          <Button>Confirmar compra</Button>
        </PurchaseConfirmationWrapper>
      </PurchaseConfirmationContainer>
      
      
      
    </Container>
  )
}
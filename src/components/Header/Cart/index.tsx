import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { AppState } from "../../../redux/@types"
import { fetchAllProducts } from "../../../redux/actions"

import {
  Container,
  CartWrapper
} from './styles'

export function Cart(){

  const cart = useSelector((state: AppState) => state.cartReducer.cart)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  return (
    <Container>
      <Link to="/checkout">
        <CartWrapper>
          <div>
            <h1>
              {cart && cart.length}
            </h1>
          </div>
          <img src="/assets/cart-icon.svg" alt="" />
        </CartWrapper>
      </Link>
    </Container>
  )
}
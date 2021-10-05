import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { AppState } from "../../redux/@types"

export function Cart(){

  const cart = useSelector((state: AppState) => state.cartReducer.cart)

  return (
    <Link to="/checkout">
      {cart && cart.length}
    </Link>
  )
}
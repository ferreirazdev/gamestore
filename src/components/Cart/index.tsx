import { useSelector } from "react-redux"
import { AppState } from "../../redux/@types"

export function Cart(){

  const cart = useSelector((state: AppState) => state.cartReducer.cart)

  return (
    <div>
      {cart && cart.length}
    </div>
  )
}
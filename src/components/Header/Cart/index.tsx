import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { AppState } from "../../../redux/@types"
import { fetchAllProducts } from "../../../redux/actions"

export function Cart(){

  const cart = useSelector((state: AppState) => state.cartReducer.cart)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  return (
    <Link to="/checkout">
      {cart && cart.length}
    </Link>
  )
}
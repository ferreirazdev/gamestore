import { useDispatch } from "react-redux"

type CartMenuProps = {
  cart: {}[];
  onClick: Function;
  menuOpen:boolean;
  anchorEl:null | HTMLElement
}

export function Cart({ cart, onClick, menuOpen, anchorEl}: CartMenuProps){

  const dispatch = useDispatch()

  return (
    <div>Cart</div>
  )
}
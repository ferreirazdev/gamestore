import { useSelector } from "react-redux";
import { AppState } from "../../redux/@types";

import { Cart } from "../Cart";

interface AppBarProps {
  onClick: Function;
  drawerState: boolean;
}

export const Header = () => {

  const cart = useSelector((state: AppState) => state.cartReducer.cart)
  
  return (
    <div>
      Cart
    </div>
  )
}
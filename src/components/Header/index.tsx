import { useSelector } from "react-redux";
import { AppState } from "../../redux/@types";

import { Cart } from "../Cart";



export const Header = () => {

  return (
    <div>
      <Cart />
    </div>
  )
}
import { useSelector } from "react-redux";
import { AppState } from "../../redux/@types";

import { Cart } from "./Cart";

import {
  Container,
  LogoWrapper,
  SearchWrapper,
  ButtonsWrapper
} from './styles'

export function Header(){
  

  return (
    <Container>
      <LogoWrapper>
        <img src="/assets/logo.png" alt="" />
        <h1>GAMESTORE</h1>
      </LogoWrapper>
      <SearchWrapper>
        <input type="text" />
      </SearchWrapper>
      <ButtonsWrapper>
        <Cart />
        <button>Login</button>
      </ButtonsWrapper>
    </Container> 
  )
}
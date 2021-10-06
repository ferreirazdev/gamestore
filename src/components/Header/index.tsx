import { Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AppState } from "../../redux/@types";
import { setSearchKeyword } from "../../redux/actions";

import { Cart } from "./Cart";

import {
  Container,
  LogoWrapper,
  SearchWrapper,
  ButtonsWrapper
} from './styles'

export function Header(){
  const router = useHistory() 

  const dispatch = useDispatch()

  const handleInputChange = (e: any) => {
    dispatch(setSearchKeyword(e.target.value))
  }

  return (
    <Container>
      <LogoWrapper onClick={() => router.push('/')}>
        <img src="/assets/logo.png" alt="" />
        <h1>GAMESTORE</h1>
      </LogoWrapper>
      <SearchWrapper>
        <input onChange={handleInputChange} type="text" />
      </SearchWrapper>
      <ButtonsWrapper>
        <Cart />
        <button>Login</button>
      </ButtonsWrapper>
    </Container> 
  )
}
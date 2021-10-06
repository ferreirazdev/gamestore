import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../../redux/@types"
import { addProductToCart, fetchAllProducts, setSearchKeyword } from "../../redux/actions"
import _ from 'lodash'

import { ProductState } from "../../redux/@types"
import { ProductCard } from "../../components/ProductCard"

import {
  Container,
  ContentWrapper,
  ProductWrapper,
  SortBy,
  SelectOptions,
  Options,
  TitleLabel
} from './styles'
import { InputLabel, MenuItem, Select } from "@mui/material"


export function Home(){
  const reduxProducts = useSelector((state: AppState) => state.productReducer.products)
  const isLoading = useSelector((state: AppState) => state.productReducer.isLoading)
  const cart = useSelector((state: AppState) => state.cartReducer.cart)
  const searchKeyword = useSelector((state: AppState) => state.uiReducer.searchKeyWord)
  
  const [products, setProducts] = useState<ProductState[]>([])
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])
  
  useEffect(() => {
    setProducts(reduxProducts)
  }, [reduxProducts])
  


  const handleSort = (e: any) => {
    dispatch(setSearchKeyword(e.target.value))
  }

 
  return (
    <Container>
      <ContentWrapper>
          <SortBy>
            <TitleLabel id="sort-product-select-label">
              <h1>Ordenar por:</h1>
            </TitleLabel>
            <Select 
              labelId="sort-product-select-label"
              id="sort-product-select"
              onChange={handleSort}
              defaultValue={searchKeyword}
              disableUnderline={true} 
            >
              <MenuItem value="name">Nome</MenuItem>
              <MenuItem value="price">Preço</MenuItem>
              <MenuItem value="score">Avaliação</MenuItem>
            </Select>
          </SortBy>
        <ProductWrapper>
          {products.map((product: any) => (
            <ProductCard 
              key={product.id}
              name={product.name}
              price={product.price}
              score={product.score}
              image={product.image}
              onClick={() => dispatch(addProductToCart(product))}
              buttonTitle="Adicionar"
            />
          ))}
        </ProductWrapper>
      </ContentWrapper>
    </Container>
  )
} 
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../../redux/@types"
import { addProductToCart, fetchAllProducts } from "../../redux/actions"

import { ProductState } from "../../redux/@types"
import { ProductCard } from "../../components/ProductCard"

import { Cart } from '../../components/Cart'


import {
  Container,
  Header,
  ContentWrapper,
  ProductWrapper
} from './styles'


export function Home(){
  const reduxProducts = useSelector((state: AppState) => state.productReducer.products)
  const isLoading = useSelector((state: AppState) => state.productReducer.isLoading)

  const cart = useSelector((state: AppState) => state.cartReducer.cart)

  const [products, setProducts] = useState<ProductState[]>([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  useEffect(() => {
    setProducts(reduxProducts)
  }, [reduxProducts])

  return (
    <Container>
      <ContentWrapper>
        <ProductWrapper>
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              onClick={() => dispatch(addProductToCart(product))}
              disabled={cart.includes(product)}
            />
          ))}
        </ProductWrapper>
      </ContentWrapper>
    </Container>
  )
} 
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../../redux/@types"
import { fetchAllProducts } from "../../redux/actions"

import { ProductState } from "../../redux/@types"
import { ProductCard } from "../../components/ProductCard"


import {
  Container,
  Header,
  ContentWrapper,
  ProductWrapper
} from './styles'


export function Home(){
  const reduxProducts = useSelector((state: AppState) => state.productReducer.products)
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
      <Header>

      </Header>
      <ContentWrapper>
        <ProductWrapper>
          {products.map((product) => (
            <ProductCard 
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </ProductWrapper>
      </ContentWrapper>
    </Container>
  )
} 
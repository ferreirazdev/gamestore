
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../../redux/@types"
import { fetchAllProducts } from "../../redux/actions"

import { ProductState } from "../../redux/@types"
import { ProductCard } from "../../components/ProductCard"


export function Home(){
  const reduxProducts = useSelector((state: AppState) => state.productReducer.products)
  const [products, setProducts] = useState<ProductState[]>([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllProducts())
    setProducts(reduxProducts)
  }, [dispatch, reduxProducts])

  return (
    <div>
      <ul>
        {products.map((product) => (
          <ProductCard 
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </ul>
    </div>
  )
} 
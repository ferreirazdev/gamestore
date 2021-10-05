import { ProductState } from "../../redux/@types"
import { Link } from "react-router-dom"

import {
  Container,
  Name,
  Price,
  ProductImage
} from './styles'

export function ProductCard({
  name,
  price,
  image
}: ProductState){
  return (
    <Container key={name}>
      <div>
        <Name>{name}</Name>
        <ProductImage src={`assets/${image}`} alt={name}/>
        <div className="buy">
          <Price>{price}</Price>
          <button>
            Comprar
          </button>
        </div>
      </div>
    </Container>
  )
}
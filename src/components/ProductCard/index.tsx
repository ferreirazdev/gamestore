import { ProductState } from "../../redux/@types"
import { Link } from "react-router-dom"

import {
  Container,
  Name,
  Price,
  ProductImage
} from './styles'

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
  onClick:Function;
  disabled:boolean;
}

export function ProductCard({
  name,
  price,
  image,
  onClick,
  disabled
}: ProductCardProps){
  return (
    <Container key={name}>
      <div>
        <Name>{name}</Name>
        <ProductImage src={`assets/${image}`} alt={name}/>
        <div className="buy">
          <Price>{price}</Price>
          <button disabled={disabled} onClick={() => onClick()}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </Container>
  )
}
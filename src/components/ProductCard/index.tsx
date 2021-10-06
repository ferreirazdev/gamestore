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
  score: number;
  onClick:Function;
  buttonTitle: string;
}

export function ProductCard({
  name,
  price,
  image,
  score,
  onClick,
  buttonTitle
}: ProductCardProps){
  return (
    <Container>
      <div>
        <Name>{name}</Name>
        <ProductImage src={`assets/${image}`} alt={name}/>
        <div className="buy">
          <Price>{price}</Price>
          <button onClick={() => onClick()}>
            {buttonTitle}
          </button>
          <h3>{score}</h3>
        </div>
      </div>
    </Container>
  )
}
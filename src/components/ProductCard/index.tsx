import { ProductState } from "../../redux/@types"
import { Link } from "react-router-dom"

import {
  Container,
  Wrapper,
  Name,
  Price,
  ProductImage,
  InfoWrapper,
  Score,
  Button
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
      <Wrapper className="wrapper">
        <Name>{name}</Name>
        <ProductImage src={`assets/${image}`} alt={name}/>
        <InfoWrapper>
          <div>
            <Price>{`R$ ${price}`}</Price>
            <Score>{`⭐ ${score}`}</Score>
          </div>
          <Button onClick={() => onClick()}>
            {buttonTitle}
          </Button>
        </InfoWrapper>
      </Wrapper>
    </Container>
  )
}
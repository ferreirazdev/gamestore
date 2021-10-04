import { ProductState } from "../../redux/@types"

export function ProductCard({
  name,
  price,
  image
}: ProductState){
  return (
    <div>
      <h1>{name}</h1>
      <h1>{price}</h1>
      <img src={`assets/${image}`}/>
    </div>
  )
}
import { examples } from "../../utils/examples"
import { Product } from "./Product"

export const Products = () =>{
    return(
        <div className="col-[5/e]">
            <div className="grid grid-cols-3">
                {
                    examples.map((product, index)=>(
                    <Product 
                    img={product.img}
                    name={product.name}
                    price={product.price} 
                    condition={product.condition}
                    rating={product.rating}
                    key={index}/>))
                }
            </div>
        </div>
    )
}
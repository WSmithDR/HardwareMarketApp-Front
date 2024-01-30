
import { examples } from "../../utils/examples"
import { Product } from "./Product"

export const Products = ({className}) =>{
 
    return(
        <div className={className}>
            <div className="grid grid-cols-4">
                {
                    examples.map((product, index)=>(
                    <Product
                    img={product.img}
                    name={product.name}
                    price={product.price} 
                    condition={product.condition}
                    score={product.score}
                    offer={product.offer}
                    sold={product.sold}
                    stock={product.stock}
                    className="col-span-2 mx-8 my-8" 
                    key={index}/>))
                }
            </div>
        </div>
    )
}
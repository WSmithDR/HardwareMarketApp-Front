import { CartBtn } from "../../components/Product/CartBtn"
import { Img } from "../../components/Product/Img"
import { Name } from "../../components/Product/Name"
import { PrdCondition } from "../../components/Product/PrdCondition"
import { PrdRating } from "../../components/Product/PrdRating"
import { Price } from "../../components/Product/Price"

export const Product = ({img,name,price, condition, rating})=>{
    return(
        <div className="col-span-2 mx-8 my-8">
            <div className="grid grid-cols-4 bg-bgProduct indent-[10px]">
                <div className="grid col-[1/2]">
                    <Img url={img} alt={name}/>
                </div>
                <div className="grid col-[2/4]">
                    <Name name={name}/>
                    <Price price={price}/>
                    <PrdCondition condition={condition}/>
                </div>
                <div className="grid col-[4/f]">
                    <PrdRating rating={rating}/>
                    <CartBtn/>
                </div>
            </div>
        </div>
    )
}
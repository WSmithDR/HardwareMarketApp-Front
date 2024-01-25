import { CartBtn } from "../../components/Product/CartBtn"
import { Img } from "../../components/Product/Img"
import { Name } from "../../components/Product/Name"
import { Offer } from "../../components/Product/Offer"
import { PrdCondition } from "../../components/Product/PrdCondition"
import { PrdRating } from "../../components/Product/PrdRating"
import { Price } from "../../components/Product/Price"
import { Sold } from "../../components/Product/Sold"
import { StockLeft } from "../../components/Product/StockLeft"

export const Product = ({img,name,price, condition, score,offer, sold, stock,className})=>{
    return(
        <div className={className}>
            <div className="grid grid-cols-2 bg-bgProduct">
                <div className="grid col-[1/2]">
                    <Img url={img} alt={name}/>
                </div>
                <div className="grid col-[2/e] p-[20px]">
                    <Name name={name}/>
                    <PrdRating score={score}/>
                    <Price price={price}/>
                    <StockLeft stock={stock}/>
                    <Offer offer={offer}/>
                    <PrdCondition condition={condition}/>
                    <Sold sold={sold}/>
                    <CartBtn/>
                </div>
            </div>
        </div>
    )
}
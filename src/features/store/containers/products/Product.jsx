import { CartBtn } from "../../components/Product/CartBtn"

import { Name } from "../../components/Product/Name"

import { PrdRating } from "../../components/Product/PrdRating"
import { Price } from "../../components/Product/Price"

import { StockLeft } from "../../components/Product/StockLeft"

export const Product = ({title,price,  score,  stock,className})=>{
    return(
        <div className={className}>
            <div className="grid grid-cols-2  bg-bgProduct max-[320px]:w-[350px]  max-[375px]:w-[300px] max-[425px]:w-[350px] max-[425px]:mx-auto min-[1200px]:w-[300px]">
                <div className="grid col-[1/2]">
                    {/* <Img url={img} alt={name}/> */}
                </div>
                <div className="grid col-[2/e] p-[20px]">
                    <Name name={title}/>
                    <PrdRating score={score}/>
                    <Price price={price}/>
                    <StockLeft stock={stock}/>
                    {/* <Offer offer={offer}/> */}
                    {/* <PrdCondition condition={condition}/> */}
                    {/* <Sold sold={sold}/> */}
                    <CartBtn/>
                </div>
            </div>
        </div>
    )
}
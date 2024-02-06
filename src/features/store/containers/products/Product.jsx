import { CartBtn } from "../../components/Product/CartBtn";

import { Name } from "../../components/Product/Name";

import { PrdRating } from "../../components/Product/PrdRating";
import { Price } from "../../components/Product/Price";

import { StockLeft } from "../../components/Product/StockLeft";

export const Product = (prop) => {
  const { title, price, score, stock } = prop;

  return (
    <div className="flex border-yellow-400 border-[1px] space-x-10">
      <div className="">{/* <img url={img} alt={name} /> */}</div>
      <div className="fle">
        <Name name={title} />
        <PrdRating score={score} />
        <Price price={price} />
        <StockLeft stock={stock} />
        {/* <Offer offer={offer}/> */}
        {/* <PrdCondition condition={condition}/> */}
        {/* <Sold sold={sold}/> */}
        <CartBtn />
      </div>
    </div>
  );
};

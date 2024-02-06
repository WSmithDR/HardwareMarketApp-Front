// import { examples } from "../../utils/examples"
import { Product } from "./Product";

export const Products = (prod) => {
  const { title, price, score, stock } = prod;

  return (
    <div>
      <div>
        <Product
          name={title}
          price={price}
          score={score}
          stock={stock}
          // className=""
        />
      </div>
    </div>
  );
};

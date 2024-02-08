// import { examples } from "../../utils/examples"
import { useSelector } from "react-redux";
import { Product } from "./Product";

export const Products = () => {
  const products = useSelector((state) => state.products.products);

  // Productos (en general)
  return (
    <div className="space-y-10 mt-10">
      {products.map((product, index) => {
        return (
          <div key={index}>
            <Product
              thumbnails={product.thumbnails}
              title={product.title}
              description={product.description}
              price={product.price}
              trademark={product.trademark}
              stock={product.stock}
            />
          </div>
        );
      })}
    </div>
  );
};

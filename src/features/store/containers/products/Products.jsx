// import { examples } from "../../utils/examples"
import { useSelector } from "react-redux";
import { Product } from "./Product";

export const Products = (props) => {
  
  
  // Productos (en general)
  return (
    <div className="space-y-10 mt-10">
  
     
          <div >
            <Product
              thumbnails={props.thumbnails}
              title={props.title}
              description={props.description}
              price={props.price}
              trademark={props.trademark}
              stock={props.stock}
            />
          </div>
       
   
    </div>
  );
};

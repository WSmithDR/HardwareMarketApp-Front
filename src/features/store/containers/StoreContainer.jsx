import { useEffect} from "react";
import Filters from "./filters/Filters";
import { Products } from "./products/Products";
import { productsFetch } from "../../../data";
import { useDispatch, useSelector } from "react-redux";
import * as productsActions from "../../../redux/productsReducer/productsAction"

export const StoreContainer = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)
  useEffect(async() => {

    const fetchProducts  = async() => {
      const  setProds = await productsFetch()
      dispatch(productsActions.loadProductsAction(setProds))
    }
    
      fetchProducts()
  
  },[])
 
  return (
    <div className=" h-fit   flex flex-col  min-[768px]:flex-row min-[768px]:w-[100vw] " >
      <Filters/>
      <div className="flex w-[100vw] flex-wrap  gap-5  max-[320px]:w-[380px]
      max-[425px]:items-center max-[425px]:justify-center min-[1000px]:justify-between max-[320px]:justify-center border-2">
    

   
    { products.map((prod , index) => (
         <Products  {...prod} key={index} />
    ))}
 
     
      </div>
     
    </div>
  );
};

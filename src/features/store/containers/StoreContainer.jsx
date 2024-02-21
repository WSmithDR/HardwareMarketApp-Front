

import {Filters} from "./filters/Filters";
import { Products } from "./products/Products";
import { useSelector } from "react-redux";

export const StoreContainer = () => { 


  // productos totales del estado global.
  const products = useSelector(state => state.products.products)
  

  // estado para verificar si se eligio o no una categoria, caso contrario se queda en null. 
  const selectedCategory = useSelector(state => state.products.categorySelected)

  // si se eligio una categoria se filtra productos con esa categoria para mapearlas.
  const prodsPorCategory = products.filter(prod => prod.category == selectedCategory)


  const prodInput = useSelector(state => state.products.prodInput)



  // esta funcion se encarga de verificar si el usuario filtro por categorias algunos productos. se verifica si se eligio una categoria y se filtra con la funcion prodsPorCategory .

  const handleMap = () => {
   
    if(!prodInput.length && selectedCategory == null && !prodsPorCategory.length) {
      
      return  products.map(product => (
       <Products key={product} {...product}/>
  
      ))
      
    }
    
    else if( selectedCategory !== null && !prodsPorCategory.length ){
     return <h3>No hay productos en esta categoria.</h3>
    }
  
    else if(selectedCategory !== null) {
      return prodsPorCategory.map(product => (
        <Products key={product} {...product}/>
      ))
    }
    else if(prodInput  && selectedCategory == null && !prodsPorCategory.length){
      return (
        prodInput.map(product => (
          <Products key= {product} {...product} />
        ))
      )
    }
  
  }


  return (
    <div className=" h-fit   flex flex-col  min-[768px]:flex-row min-[768px]:w-[100vw] " >
   
      <Filters/>
      <div className={`h-fit flex w-[100vw] flex-wrap  gap-5  max-[320px]:w-[380px]
      max-[425px]:items-center max-[425px]:justify-center min-[1000px]:justify-between max-[320px]:justify-center  min-[1300px]:w-[60%] min-[1300px]:mx-auto mb-10 `}>
        
     {/* se llama a una funcion de handle para controlar y mapear los productos depende si el usuario filtro por categoria , caso contrario se mapean todos los productos. */}
      {handleMap()}

      {/* -------------------------------------------------- */}
     
      </div>

    </div>
  );
};

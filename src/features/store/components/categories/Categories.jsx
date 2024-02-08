import { useState } from "react";
//se hizo un array de objetos de categorias para que el codigo sea mas limpio
import { categoriesList } from "./categoriesList";
import { useDispatch } from "react-redux";
import * as productsActions from "../../../../redux/productsReducer/productsAction";
//------------------------------------------------//
const Categories = (prop) => {
  // const [categorySelect, setCategorySelect] = useState(null);
  const [id, setId] = useState();

  const dispatch = useDispatch();

  //esta funcion se encarga de seleccionar el id de la categoria y ademas tambien setea la categoria seleccionada para filtrar los productos
  const handleUlAndCategory = (e) => {
    let selectedCategory = e.target.innerText;
    let idSelect = e.target.id;

    setId(idSelect);
    if (id == idSelect) {
      setId(null);
      dispatch(productsActions.categorySelectedAction(null));
    } else if (id !== idSelect) {
      dispatch(productsActions.categorySelectedAction(selectedCategory));
    }
  };
  return (
    <div
      className={` flex-col h-fit w-[260px] bg-colorButtons text-white  rounded-[3px] text-[14px]  min-[768px]: ${
        prop.hidden ? "hidden" : "flex"
      }`}
    >


      {categoriesList.map((category) => (
        <div className="p-4" key={category.id}>
        <h2
          className="text-[16px] cursor-pointer"
          on  onClick={(e) => handleUlAndCategory(e)}
          id={category.id}
        >
          {category.categoryName}
        </h2>
        <ul   className={`pl-5  flex-col gap-5 mt-5 ${
       id == category.id ? "flex" : "hidden"}` } >
         {category.subCategories.map((subCategory , index) => (
           <li  key={index}   className="cursor-pointer">{subCategory}</li>
         ))}
        </ul>
      </div>

      ))}
    </div>
  );
};

export default Categories;

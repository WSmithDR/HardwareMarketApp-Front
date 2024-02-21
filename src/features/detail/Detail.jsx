import { useParams } from "react-router-dom";
import { StoreNavBar } from "../store/containers/navigation/StoreNavBar";
import { useDispatch, useSelector } from "react-redux";
import * as productsActions from "../../redux/productsReducer/productsAction"
import { addCartFetch } from "./productDetail";
export const Detail = () => {
  const {productId} = useParams()
  const prods = useSelector(state => state.products.products)
  const findProd = prods.find(prod => prod._id == productId)
  const userCart = useSelector(state => state.user.user)
  const userId = useSelector(state => state.user.user.user.userId)

 
  const dispatch = useDispatch()
  const handleAddCart = async (e) => {
    e.preventDefault()
    const res =  await  addCartFetch(findProd, userCart , userId)

};

  return (
    <div className="">
      <StoreNavBar />

      <div className="flex items-center justify-center p-10">
        <div>
          <img
            src={`${findProd.thumbnails[0]}`}
            alt=""
            className="w-80 h-80 rounded-l-lg"
          />
        </div>
        <div className="h-[320px] w-[550px] bg-[#DCDBDB] rounded-r-lg">
          <h1 className="font-josefin text-[30px] p-6">Radeon RX 550</h1>
          <p className="font-josefin p-6">
            Tarjeta de video RX 550, 4 Gb memoria, disipador de calor OC puerto
            HDMI
          </p>
          <button className="h-9 w-40 absolute left-[620px] top-[400px]  bg-colorButtons text-white font-josefin" onClick={(e) => handleAddCart(e)}>
            Agregar al carrito
          </button>
          <button className="h-9 w-40 absolute right-[300px] top-[400px] font-josefin bg-colorButtons text-white">
            Negociar
          </button>
        </div>
      </div>
      {/* Descripcion del producto y resenas aqui abajo */}
      <div className="flex items-center justify-center">
        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque enim
          sit laborum sequi temporibus aut totam officia hic dolores ducimus
          sapiente tenetur explicabo, labore doloremque! Totam, commodi! Nam,
          aut culpa!
        </p>
      </div>
    </div>
  );
};

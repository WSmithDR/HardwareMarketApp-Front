
import { useEffect } from "react";
import Routes from "./routes/Routes";
import * as  productsActions from "./redux/productsReducer/productsAction"
import { useDispatch } from "react-redux";
import { productsFetch } from "./data";
function App() {
  const dispatch = useDispatch()
 useEffect(() => {
    const fetchProds  = async() => {
      const response = await productsFetch()
     dispatch(productsActions.loadProductsAction(response))
    }
    fetchProds()

 },[])
  return (
    <>
      <Routes />
    </>
  );
}

export default App;

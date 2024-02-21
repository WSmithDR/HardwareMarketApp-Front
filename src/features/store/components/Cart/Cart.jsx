import { useState, useEffect } from 'react'
import { CartProduct } from './CartProduct'
import { PropTypes } from 'prop-types'
import { useSelector } from 'react-redux';
import axios from 'axios';

export const Cart = ({cartOpen, handleCart}) => {
    const userId = useSelector(state => state.user.user?.user.userId)

    const closedStyle = "absolute top-[115px] right-0 bg-white w-[300px] h-[600px] p-8 ml-2 mr-4 mt-[-10px] shadow-[0_3px_2px_0_rgba(0,0,0,0.3)] ease-in duration-200 translate-x-[170rem]"
    const openStyle = "absolute top-[115px] right-0 bg-white w-[300px] h-[600px] p-8 ml-2 mr-4 mt-[-10px] shadow-[0_3px_2px_0_rgba(0,0,0,0.3)] rounded-b-[20px] ease-out duration-200 translate-x-[0rem] max-[768px]:m-[9px] max-[768px]:translate-x-[-0.2rem]"

    
    //Lo hice de esta forma para ver como manejar la suma de los precio

    const [products , setProducts] = useState([])
   
    const [total, setTotal] = useState('0.00');

    // const sumTotal = ()=>{
    //     return products.reduce((total, product) => total + product.price, 0)
    // }

    useEffect(()  => {
        const fetchingProdsCart  = async() => {
        const productsCart =  await axios(`https://g1fprh3j-8080.brs.devtunnels.ms/v1/api/carts/user/${userId}`)
        const OwnerProd = Object.entries(productsCart.data.data.availableProducts)
        OwnerProd.map((prod) => setProducts((prod[1]?.products)))
    
        } 
       
        fetchingProdsCart()
    }, [])
    

    // useEffect(()=> {
    //     setTotal(sumTotal())
    // }, [])

    /* const addProduct = (name, price) => {  
        Esta función podríamos utilizarla en los botones de 'añadir' de cada producto
        const newProduct = { name, price }
        setProducts(...products, newProduct)
    } */



    return (
        <div className={cartOpen ? closedStyle : openStyle} /*style={{'border-bottom-right-radius':'20px','border-bottom-left-radius':'20px'}}*/>
            <div className="flex justify-between h-[40px] items-center p-[0_0_20px]">
                <h1 className=" border-b border-b-black w-max h-max font-bold text-[#05607C]">Tu Carrito</h1>
                <button onClick={() => handleCart()}>
                    <img src="/public/images/cerrar.png" alt="cerrar" className="w-6 h-6"/>
                </button>
            </div>
            <div className="flex-col overflow-y-auto max-h-[400px] pt-4 pr-2">
                {products?.map((product)=>{
                  
                    return (
                    <CartProduct key={product.id}  {...product}/>
                    )
                })}
            </div>
            <div className="flex justify-between p-2">
                <h2 className=" font-semibold">Total</h2>
                <b>${total}</b>
            </div>
            <hr className="h-[1.5px] w-[140px] m-auto bg-black" />
            <div className="flex items-center justify-around mt-4">
                <button className="rounded-md p-[6px_72px] bg-colorButtons text-white font-sans font-thin text-xl tracking-widest cursor-pointer">Comprar Ahora</button>
            </div>
        </div>
    )
};

Cart.propTypes = {
    cartOpen: PropTypes.bool.isRequired,
    handleCart: PropTypes.func.isRequired
}
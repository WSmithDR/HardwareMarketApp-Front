import { useState, useEffect } from 'react'
import { CartProduct } from './CartProduct'
import { PropTypes } from 'prop-types'

export const Cart = ({cartOpen, handleCart}) => {

    const closedStyle = "absolute top-[115px] right-0 bg-white w-[300px] h-[600px] p-8 ml-2 mr-4 mt-[-10px] shadow-[0_3px_2px_0_rgba(0,0,0,0.3)] ease-in duration-200 translate-x-[170rem]"
    const openStyle = "absolute top-[115px] right-0 bg-white w-[300px] h-[600px] p-8 ml-2 mr-4 mt-[-10px] shadow-[0_3px_2px_0_rgba(0,0,0,0.3)] rounded-b-[20px] ease-out duration-200 translate-x-[0rem] max-[768px]:m-[9px] max-[768px]:translate-x-[-0.2rem]"

    
    //Lo hice de esta forma para ver como manejar la suma de los precio
    const [products, setProducts] = useState([
        {
            name: 'GraphicCard',
            price: 2000
        },{
            name: 'iPhone',
            price: 3000
        },{
            name: 'iPhone',
            price: 3000
        },{
            name: 'iPhone',
            price: 3000
        },{
            name: 'iPhone',
            price: 3000
        },{
            name: 'iPhone',
            price: 3000
        }
    ])

    const [total, setTotal] = useState('0.00');

    const sumTotal = ()=>{
        setProducts // Lo puse acá para que no me marque en rojo por no utilizarlo
        return products.reduce((total, product) => total + product.price, 0)
    }

    useEffect(()=> {
        setTotal(sumTotal())
    }, [])

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
                {products.map((product)=>{
                    return (
                    <CartProduct key={Math.random().toFixed(3)} product={product.name} price={product.price}/>
                    )
                })}
            </div>
            <div className="flex justify-between p-2">
                <h2 className=" font-semibold">Total</h2>
                <b>${total}</b>
            </div>
            <hr className="h-[1.5px] w-[140px] m-auto bg-black" />
            <div className="flex items-center justify-around mt-4">
                <button className="rounded-md p-[6px_72px] bg-colorButtons text-white font-sans font-thin text-xl tracking-widest cursor-pointer">Checkout</button>
            </div>
        </div>
    )
};

Cart.propTypes = {
    cartOpen: PropTypes.bool.isRequired,
    handleCart: PropTypes.func.isRequired
}
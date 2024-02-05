import { PropTypes } from 'prop-types'

export const CartProduct = ({ product, price }) => {
    return (
        <div className="flex items-center justi h-[60px] mb-4 shadow-[0_3px_2px_0_rgba(0,0,0,0.3)] rounded-xl overflow-hidden">
            <div className="w-[70px] h-[70px] p-2 bg-white">
                <img src={`./public/images/${product}.jpg`} alt={`${product}`} className="w-[100%] h-[100%] object-fit rounded-xl" />
            </div>
            <div className="flex items-center justify-between h-[70px] border-l-[#01242f37] border-l-2 pl-2 pr-0.5 text-sm">
                <h2 className="w-[85px]">{product}</h2>
                <b>${price}</b>
            </div>
        </div>
    )
}

CartProduct.propTypes = {
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
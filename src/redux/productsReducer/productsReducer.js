import { ADD_PRODUCT_CART, CATEGORY_SELECTED, LOAD_PRODUCTS, PRODS_INPUT, SHIPPING_COST } from "./productsAction"



const initialState = {
    products : [] ,
    categorySelected : null ,
    shippingIsFree : false,
    prodInput : [] ,
    cart : [] ,
}



export const productsReducer = (state = initialState , {type , payload}) => {

    switch(type){
        case  LOAD_PRODUCTS : {
            return {
                ...state ,
                products : payload
            }
        }
        case  CATEGORY_SELECTED : {
            return {
                ...state ,
                categorySelected : payload 
            }
        }

        case PRODS_INPUT : {
            return {
                ...state ,
                prodInput : payload 
            }
        }
        
        case SHIPPING_COST : {
            return {
                ...state ,
                shippingIsFree : payload
            }
        }
        case ADD_PRODUCT_CART : {
            let productFind = state.products.find((producto) => producto._id === payload )
       
            
            return { 
                ...state,
                cart: [...state.cart , payload]
            } ;
           
        }
        default :
            return state
           
        
    }

}


import { CATEGORY_SELECTED, LOAD_PRODUCTS, SHIPPING_COST } from "./productsAction"

const initialState = {
    products : [] ,
    categorySelected : null ,
    shippingIsFree : false
}



export const productsReducer = (state = initialState , {type , payload}) => {

    switch(type){
        case  LOAD_PRODUCTS : {
            return {
                ...state ,
                products  : payload
            }
        }
        case  CATEGORY_SELECTED : {
            return {
                ...state , 
                categorySelected : payload
            }
        }
        case SHIPPING_COST : {
            return {
                ...state ,
                shippingIsFree : payload
            }
        }
        default :
            return state
           
        
    }

}


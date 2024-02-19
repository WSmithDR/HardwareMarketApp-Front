import { CATEGORY_SELECTED, LOAD_PRODUCTS, PRODS_INPUT, SHIPPING_COST } from "./productsAction"
import { productsPorCategories } from "./productsReducerUtils"


const initialState = {
    products : [] ,
    categorySelected : null ,
    shippingIsFree : false,
    prodInput : []
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
        default :
            return state
           
        
    }

}


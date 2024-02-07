import { CATEGORY_SELECTED, LOAD_PRODUCTS } from "./productsAction"

const initialState = {
    products : [] ,
    categorySelected : null ,
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
        default :
            return state
           
        
    }

}


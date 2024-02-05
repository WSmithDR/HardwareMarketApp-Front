import { LOAD_PRODUCTS } from "./productsAction"

const initialState = {
    products : []
}



export const productsReducer = (state = initialState , {type , payload}) => {

    switch(type){
        case  LOAD_PRODUCTS : {
            return {
                ...state ,
                products  : payload
            }
        }
        default :
            return state
           
        
    }

}


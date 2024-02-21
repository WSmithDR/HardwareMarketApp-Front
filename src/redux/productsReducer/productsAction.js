export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const CATEGORY_SELECTED = "CATEGORY_SELECTED"
export const SHIPPING_COST = "SHIPPING_COST"
export const PRODS_INPUT = "PRODS_INPUT";
export const ADD_PRODUCT_CART = "ADD_PRODUCT_CART"

export const loadProductsAction = (prods) => {
    return {
        type : LOAD_PRODUCTS,
        payload : prods
    }
}
export const categorySelectedAction =(category) => {
    return {
        type : CATEGORY_SELECTED ,
        payload : category
    }
}

export const shippingCostAction = (shipping) => {
    return {
        type : SHIPPING_COST,
        payload : shipping
    }
}

export const inputProdAction = (prods) =>{
    return {
        type : PRODS_INPUT,
        payload: prods,
    }
}

export const addProductCartAction = (product) => {
   
    return {
        type : ADD_PRODUCT_CART,
        payload : product
    }
}
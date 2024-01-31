export const LOAD_PRODUCTS = "LOAD_PRODUCTS";


export const loadProductsAction = (prods) => {
    return {
        type : LOAD_PRODUCTS,
        payload : prods
    }
}
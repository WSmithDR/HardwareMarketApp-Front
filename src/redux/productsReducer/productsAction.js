export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const CATEGORY_SELECTED = "CATEGORY_SELECTED"

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
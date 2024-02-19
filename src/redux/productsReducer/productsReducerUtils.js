


export const productsPorCategories = (products , category) => {

    if(category === null){
        return products
    }else {
        return products.filter((prod) => prod.category == category)
    }
}
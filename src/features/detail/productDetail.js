import axios from "axios";




 export const addCartFetch = async (product , cartId, userId) => {
 
  
  
    return   await axios({
        method : "put",
        url : `https://hardwaremarketapp-back.onrender.com/v1/api/carts/${cartId.cart}/user/${userId}`,
        data : {
        productId : product._id ,
        quantity : 1
        }

    })

    
}
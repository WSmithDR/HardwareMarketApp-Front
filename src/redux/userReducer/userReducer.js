import { USER_LOGIN, USER_LOGOUT } from "./userActions"



const initialState = {
    user : null
}

export const userReducer = (state = initialState ,{type , payload}) => {
   switch(type){
    case USER_LOGIN :
        return {
            ...state ,
            user : payload
            
        }
    case USER_LOGOUT :{
        return {
            ...state ,
            user : payload
        }
    }
    default : {
        return state
    }
   

    
   
}
}
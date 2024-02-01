import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './productsReducer/productsReducer'
import { userReducer } from './userReducer/userReducer'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'



const persistConfig = {
    key : 'root' ,
    storage ,
    version: 1 ,
}

const rootReducer = combineReducers({

    products : productsReducer ,
    user : userReducer
    
})

export const persistedReducer = persistReducer(persistConfig , rootReducer)

export const store = configureStore({
    
    reducer :  persistedReducer ,

  
})

export const persistor = persistStore(store)


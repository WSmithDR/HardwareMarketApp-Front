import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './productsReducer/productsReducer'
import { userReducer } from './userReducer/userReducer'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { FLUSH } from 'redux-persist'

const persistConfig = {
    key : 'root' ,
    storage ,
    
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


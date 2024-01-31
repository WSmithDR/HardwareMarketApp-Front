import { combineReducers, configureStore } from '@reduxjs/toolkit'

import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import { productsReducer } from './productsReducer/productsReducer'


const persistConfig = {
    key : "root" ,
    storage
}

const rootReducer = combineReducers({

    products : productsReducer
    
})

export const persistedReducer = persistReducer(persistConfig , rootReducer)

export const store = configureStore({
    
    reducer :  persistedReducer
})

export const persistor = persistStore(store)


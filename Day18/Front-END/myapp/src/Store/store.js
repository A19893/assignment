import { configureStore } from "@reduxjs/toolkit";
import  AuthReducer from "../Features/AuthSlice";
import { persistReducer,persistStore } from "redux-persist"; 
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'
const persistConfig={
    key:'root',
    version:'1',
    storage
}
const rootReducer=combineReducers({
    authentication:AuthReducer
})
const persistedReducer=persistReducer(persistConfig,rootReducer);
export const store=configureStore({
reducer:persistedReducer
})
export const persistor=persistStore(store)
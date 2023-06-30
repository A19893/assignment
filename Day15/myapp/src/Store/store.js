import {configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import {persistReducer,persistStore} from 'redux-persist'
import AuthReducer from '../Features/AuthSlice'
const persistConfig = {
    key: 'root',
    version:1,
    storage
  }
  const rootReducer=combineReducers({
    authentication:AuthReducer
  })
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store=configureStore({
   reducer:persistedReducer
})
export const persistor=persistStore(store)
import {combineReducers} from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import videoReducer from "./videoSlice.js"
import {persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({user: userReducer, video: videoReducer})

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)
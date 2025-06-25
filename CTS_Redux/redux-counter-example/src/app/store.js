//npm install @reduxjs/toolkit react-redux
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice'

export const store = configureStore({
    reducer:{
        counter: counterReducer
    }
})
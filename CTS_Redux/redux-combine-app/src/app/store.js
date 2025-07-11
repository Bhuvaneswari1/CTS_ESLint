import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../components/counter/counterSlice'
import authReducer from '../components/auth/authSlice'

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        auth: authReducer
    }
})
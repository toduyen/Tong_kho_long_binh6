import {configureStore} from '@reduxjs/toolkit';
import  counterSlice  from '../Couter/counterSlice';
export default configureStore({
    reducer:{
        couter: counterSlice
    }
})
import { configureStore } from "@reduxjs/toolkit";
import CounterOpt from '../features/counterApp/CounterOpt'

export default configureStore({
    reducer:{
        count : CounterOpt
    }
})
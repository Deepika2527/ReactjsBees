import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name : 'Counter',
    initialState: 0,
    reducers :{
        Inc : function(state,actions)
        {
            return state +1
        },
        Dec : (state,actions) =>{
            return state-1
        }
    }



})

export const { Inc,Dec } = counterSlice.actions
export default counterSlice.reducer
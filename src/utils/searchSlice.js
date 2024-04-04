import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name:"search",
    initialState:{
       item:[]
    },
    reducers:{
        addData:(state,action)=>{
            state.item.push(action.payload)
        }
    }
})

export const {addData} = searchSlice.actions;
export default searchSlice.reducer;
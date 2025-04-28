import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
name:"cart",
initialState:{
cartItem:[]
},
reducers:{
    addItem:(state,action)=>{
    state.cartItem.push(action.payload)
    }
}

});

{console.log('cr',cartSlice)}

export const {addItem}=cartSlice.actions;
export default cartSlice.reducer ;

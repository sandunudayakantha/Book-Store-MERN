import { createSlice} from '@reduxjs/toolkit'

const initialState={
    cartItems:[]
}

const cartSlice =createSlice({

        name:'cart',
        initialState:initialState,
        reducers:{
            addToCart:(state,action)=>{
                const existingItem=state.cartItems.find(item => item._id === action.payload._id);
                if(!existingItem){
                    state.cartItems.push(action.payload)
                    alert("item added successfully!")
                }else(
                    alert("item already exists..")
                )
            }
        }



})

//export the actions

export const {} = cartSlice.actions;
export default cartSlice.reducer;

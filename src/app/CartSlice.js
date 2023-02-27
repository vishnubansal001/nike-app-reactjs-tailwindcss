import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cartState:false,
};
const CartSlice = createSlice({
    initialState,
    name:"cart",
    reducers:{
        setOpenCart: (state,action) => {
            state.cartState = action.payload.cartState;
        },
        setCloseCart : (state,action) => {
            state.cartState = action.payload.cartState;
        }
    }
});

export const {setOpenCart,setCloseCart} = CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export default CartSlice.reducer;
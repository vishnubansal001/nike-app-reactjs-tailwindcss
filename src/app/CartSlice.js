import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartState: false,
  cartItems: [],
};
const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
      }
    },
  },
});

export const { setOpenCart, setCloseCart, setAddItemToCart } =
  CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export default CartSlice.reducer;

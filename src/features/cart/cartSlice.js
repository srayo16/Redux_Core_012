import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: [],
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeToCart: (state, action) => {
            
            state.cart = state.cart.filter(data => data._id !== action.payload._id);    
            // state.cart=[];
            // state.cart.push(filter);
        }
    },
});
export const { addToCart,removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
// npm install @reduxjs/toolkit react-redux 
import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    //slice reducer actions type
    name: 'cart slice redux',
    //reducer initial state
    initialState: {
        cartProductIds: []
    },
    reducers: {
        //reducers redux combined with actions creators
        addToCart: (state, action) => {
            state.cartProductIds = [...state.cartProductIds, action.payload];
        },
        removeFromCart: (state, action) => {
            state.cartProductIds = state.cartProductIds
                .filter((product, index) => product.id !== action.payload);
        },
        clearAllFromCart: (state, action) => {
            state.cartProductIds = [];
        }
    }
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearAllFromCart } = cartSlice.actions;

export default cartSlice;
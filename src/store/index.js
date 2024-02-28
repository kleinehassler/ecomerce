import { configureStore } from "@reduxjs/toolkit";
import products from './slices/product.slice.js';
import cart from "./slices/cart.slice.js";

const store = configureStore({
    reducer: {
        products,
        cart,
    }
});

export default store;


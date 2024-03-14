import { configureStore } from "@reduxjs/toolkit";

import shoppingCartReducer from '../features/shoppingCart/shoppingCartSlice';

const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer
    }
});

export default store
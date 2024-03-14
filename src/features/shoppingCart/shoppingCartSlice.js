import { createSlice } from "@reduxjs/toolkit";

let qty = 0;

export const shoppingCart = createSlice({
    name: 'shoppingCart',
    initialState: {
        products: [],
        total: 0
    },
    reducers: {
        addToCart: (state, action) => {

            const {product, qty}= action.payload;

            const itemInCart = state.products.find((item) => item.id == product.id);

            if (!itemInCart) {
                state.products.push({
                    ...product,
                    qty: qty
                });
                state.total += (product.price*qty);
            } else {
                itemInCart.qty=qty;
                state.total = (product.price*qty);
            }
        },

        updateQty: (state, action) => {
            const { id, price, qty } = action.payload;

            if (qty >= 10) {
                alert("You can add max 10 items per order");
                document.getElementById("increase").disable = true;
                return;
            }
            else {

                const itemInCart = state.products.find((item) => item.id == id);
                itemInCart.qty++;
                state.total += price;
            }
        },

        decreaseQty: (state, action) => {
            const { id, price, qty } = action.payload;

            if (qty <= 1) {

                return;
    
            } else {
                const itemInCart = state.products.find((item) => item.id == id);
                itemInCart.qty--;
                state.total -= price;    
            }

        },

        removeItem: (state, action) => {
            const { id, price, qty } = action.payload;
            state.products = state.products.filter((item) => item.id !== id);
            state.total = state.total - (price * qty);

        }

    }
});

export const { addToCart, updateQty, decreaseQty, removeItem } = shoppingCart.actions;
export default shoppingCart.reducer;
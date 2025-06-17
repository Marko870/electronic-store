import { configureStore } from "@reduxjs/toolkit";
import ecommerceApi from "./services/ecommerceApi";
import cartSlice from "./features/cartSlice";
// import productsSlice from "./features/productsSlice";
const store = configureStore({
    reducer: {
        [ecommerceApi.reducerPath]: ecommerceApi.reducer,
        cart: cartSlice,
        // products: productsSlice
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(ecommerceApi.middleware)
})

export default store
import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        showCart: false,
        cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
        totalCartQuantity: 0,
        totalCartPrice: 0,
    },
    reducers: {
        showOffOnCart: (state) => {
            state.showCart = !state.showCart
        },
        addProduct: (state, action) => {
            
            let { data, count } = action.payload;
            const idNum = state.cartItems.findIndex(
                (item) => item.id === data.id
            );
            if (idNum >= 0) 
                state.cartItems[idNum].itemQuantity += count;
            else {
                state.cartItems.push({ ...data, itemQuantity: count })
            }
            localStorage.setItem("cartItems",JSON.stringify([...state.cartItems]))
        },
        deleteProduct: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        //  localStorage.setItem("cartItems",JSON.stringify([...state.cartItems]))
        },
        changeQuantity: (state, action) => {
            const { itemIndex, sign } = action.payload;
            if (sign === "+")
                state.cartItems[itemIndex].itemQuantity += 1;
            else
                state.cartItems[itemIndex].itemQuantity -= 1;

            localStorage.setItem("cartItems",JSON.stringify([...state.cartItems]))
        },
        getTotals: (state) => {
            const { totalPrice, totalQuantity } = state.cartItems.reduce((cartTotal,cartItem) => {
                let { price, itemQuantity } = cartItem;
                cartTotal.totalPrice += price * itemQuantity;
                cartTotal.totalQuantity += itemQuantity;
                return cartTotal
             }, {
                totalPrice: 0,
                totalQuantity: 0,
            })

            state.totalCartPrice = totalPrice;
            state.totalCartQuantity = totalQuantity;
        }
    }
})
export const { showOffOnCart,addProduct,deleteProduct,changeQuantity,getTotals }  = cartSlice.actions;
export default cartSlice.reducer;
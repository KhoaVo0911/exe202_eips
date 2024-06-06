import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
// import eventReducer from "./event/eventSlice";
// import shopReducer from "./shop/shopSlice";
// import productReducer from "./product/productSlice";
// import accountReducer from "./account/accountSlice";
// import cardReducer from "./card/cardSlice";
// import cartReducer from "./cart/cartSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    // event: eventReducer,
    // shop: shopReducer,
    // product: productReducer,
    // acc: accountReducer,
    // card: cardReducer,
    // cart: cartReducer,
  },
});

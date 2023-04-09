import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./CartSlice";
import { userReducer } from "./UserSlice";
import { authReducer } from "./authSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    auth: authReducer,
  },
});

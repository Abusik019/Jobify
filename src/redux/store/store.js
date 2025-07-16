import { configureStore } from "@reduxjs/toolkit";
import auth from "../slices/authSlice"
import category from "../slices/categorySlice";
import user from "../slices/userSlice"


export const store = configureStore({
    reducer: {
        auth,
        category,
        user
    }
})
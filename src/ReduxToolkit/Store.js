import { configureStore } from "@reduxjs/toolkit";
import UserumarSlice from "./UserumarSlice";

export const store = configureStore({
    reducer : {

        app: UserumarSlice,
    }, 
});
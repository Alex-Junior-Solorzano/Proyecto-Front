import { configureStore } from "@reduxjs/toolkit";
import cardslice from "./slices/tarjeta/cardslice";

const reducer = {
    rickmorty: cardslice
}

export const store= configureStore({
    reducer:reducer,
    devTools:true,    
});


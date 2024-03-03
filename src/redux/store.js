import { configureStore } from "@reduxjs/toolkit";
import { authReducer, personReducer } from "./reducer";


const store = configureStore({
    reducer: {
        auth: authReducer,
        person:personReducer
    }
});

export default store;
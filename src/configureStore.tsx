import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store/reducer";

export default function CreateStore() {
    const store = configureStore({reducer: rootReducer});
    return store;
}


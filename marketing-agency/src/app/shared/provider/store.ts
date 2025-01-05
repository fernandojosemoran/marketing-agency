import { blog, category } from './slices';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        blog,
        category
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
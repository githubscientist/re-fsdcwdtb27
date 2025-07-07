import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counterSlice';

// create a store with the counter reducer
const store = configureStore({
    reducer: {
        // Add your reducers here
        counter: counterReducer,
    }
})

export default store;
// store.js
import { configureStore } from '@reduxjs/toolkit';
import codeReducer from './codeSlice';

export const store = configureStore({
    reducer: {
        code: codeReducer,
    },
});

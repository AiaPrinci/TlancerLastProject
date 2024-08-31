import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice'; // Import the posts slice

const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
});

export default store;
import { configureStore } from '@reduxjs/toolkit';
import contentReducer from '../features/content/contentSlice.js';
import headerReducer from '../features/header/headerSlice.js';
import subredditReducer from '../features/subreddit/subredditSlice.js';

export default configureStore({
    reducer: {
        content: contentReducer,
        header: headerReducer,
        subreddit: subredditReducer,
    },
});

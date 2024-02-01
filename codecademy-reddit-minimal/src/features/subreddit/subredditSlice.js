import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadSubreddit = createAsyncThunk(
    'content/loadSubreddit', // action type
    async ({search}) => {
        const subredditField = await fetch(`https://www.reddit.com/search.json?q=${search}&type=sr&limit=16&raw_json=1`);
        const json = await subredditField.json();
        return json.data.children.map((post) => post.data);
    }
);

export const subredditSlice = createSlice({
    name: "subreddit'",
    initialState: {
        categories: [],
        isLoading: false,
        hasError: false,
    },
    extraReducers: {
        [loadSubreddit.pending]:(state,action) =>{
            state.isLoading = true;
            state.hasError = false;
        },
        [loadSubreddit.fulfilled]:(state,action) =>{
            state.isLoading = false;
            state.hasError = false;
            state.categories = action.payload;
        },
        [loadSubreddit.rejected]:(state,action) =>{
            state.isLoading = false;
            state.hasError = true;
            state.categories = [];
        },
    }
});

export const selectAllSubreddits = (state) => state.subreddit.categories;

export const isLoading = (state) => state.subreddit.isLoading;

export const hasError = (state) => state.subreddit.hasError;

export default subredditSlice.reducer;
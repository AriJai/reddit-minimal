import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadSubreddit = createAsyncThunk(
    'content/loadSubreddit', // action type
    async ({search}) => {
        const subredditField = await fetch(`https://www.reddit.com/search.json?q=${search}&type=sr&limit=16&raw_json=1`);
        const json = await subredditField.json();
        return json.data.children.map((post) => post.data);
    }
);

export const searchSubreddit = createAsyncThunk(
    'content/searchSubreddit', // action type
    async ({search}) => {
        if (!search) return [];
        const subredditField = await fetch(`https://www.reddit.com/search.json?q=${search}&type=sr&limit=16&raw_json=1`);
        const json = await subredditField.json();
        return json.data.children.map((post) => post.data);
    }
);

export const subredditSlice = createSlice({
    name: "subreddit",
    initialState: {
        search: [],
        categories: [],
        isLoading: false,
        hasError: false,
        searchIsLoading: false,
        searchHasError: false,
        error: null,
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
            state.error = action.error.message;
        },
        [searchSubreddit.pending]:(state,action) =>{
            state.searchIsLoading = true;
            state.searchHasError = false;
        },
        [searchSubreddit.fulfilled]:(state,action) =>{
            state.searchIsLoading = false;
            state.searchHasError = false;
            state.search = action.payload;
        },
        [searchSubreddit.rejected]:(state,action) =>{
            state.searchIsLoading = false;
            state.searchHasError = true;
            state.search = [];
            state.error = action.error.message;
        },
    }
});

export const selectAllSubreddits = (state) => state.subreddit.categories;

export const selectSearchSubreddits = (state) => state.subreddit.search;

export const isLoading = (state) => state.subreddit.isLoading;

export const hasError = (state) => state.subreddit.hasError;

export const searchIsLoading = (state) => state.subreddit.searchIsLoading;

export const searchHasError = (state) => state.subreddit.searchHasError;

export default subredditSlice.reducer;
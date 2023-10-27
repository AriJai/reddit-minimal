import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadPopular = createAsyncThunk(
    'content/loadPopular', // action type
    async () => {
        const popular = await fetch(`https://www.reddit.com/r/popular.json?limit=30`);
        const json = await popular.json();
        return json.data.children.map((post) => post.data);
    }
);

export const loadSearch = createAsyncThunk(
    'content/loadSearch', // action type
    async ({search}) => {
        const field = await fetch(`https://www.reddit.com/r/${search}.json?limit=30`);
        const json = await field.json();
        return json.data.children.map((post) => post.data);
    }
);


export const contentSlice = createSlice({
    name: "content'",
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false,
    },
    extraReducers: {
        [loadPopular.pending]:(state,action) =>{
            state.isLoading = true;
            state.hasError = false;
        },
        [loadPopular.fulfilled]:(state,action) =>{
            state.isLoading = false;
            state.hasError = false;
            state.posts = action.payload;
        },
        [loadPopular.rejected]:(state,action) =>{
            state.isLoading = false;
            state.hasError = true;
            state.posts = [];
        },
        [loadSearch.pending]:(state,action) =>{
            state.isLoading = true;
            state.hasError = false;
        },
        [loadSearch.fulfilled]:(state,action) =>{
            state.isLoading = false;
            state.hasError = false;
            state.posts = action.payload;
        },
        [loadSearch.rejected]:(state,action) =>{
            state.isLoading = false;
            state.hasError = true;
            state.posts = [];
        },
    }
});

export const selectAllContents = (state) => state.content.posts;

export const isLoading = (state) => state.content.isLoading;

export const hasError = (state) => state.content.hasError;

export default contentSlice.reducer;
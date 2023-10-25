import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadPopular = createAsyncThunk(
    'content/loadPopular', // action type
    async () => {
        const popular = await fetch(`https://www.reddit.com/r/popular.json`);
        const json = await popular.json();
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
    }
});

export const selectAllContents = (state) => state.content.posts;

export const isLoading = (state) => state.content.isLoading;

export default contentSlice.reducer;
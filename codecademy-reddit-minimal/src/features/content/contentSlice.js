import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadPopular = createAsyncThunk(
    'content/loadPopular', // action type
    async () => {
        const popular = await fetch(`https://www.reddit.com/r/popular.json?limit=30&raw_json=1`);
        const json = await popular.json();
        const postData = json.data.children.map((post) => post.data);
        return postData.map((post) => ({
            ...post,
            showingComments: false,
            comments: [],
            commentsLoading: false,
            commentsHasError: false,
        }));
    }
);

export const loadSearch = createAsyncThunk(
    'content/loadSearch', // action type
    async ({search}) => {
        const field = await fetch(`https://www.reddit.com/r/${search}.json?limit=30&raw_json=1`);
        const json = await field.json();
        const postData = json.data.children.map((post) => post.data);
        return postData.map((post) => ({
            ...post,
            showingComments: false,
            comments: [],
            commentsLoading: false,
            commentsHasError: false,
        }));
    }
);

export const loadComments = createAsyncThunk(
    'content/loadComments',
    async ({index, permalink}) => {
        const comments = await fetch(`https://www.reddit.com${permalink}.json`);
        const json = await comments.json();
        const commentData = json[1].data.children.map((comment) => comment.data); 
        return {index, commentData};
    }
);


export const contentSlice = createSlice({
    name: "content",
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false,
    },
    reducers: {
        toggleComments(state,action) {
            state.posts[action.payload.index].showingComments = !state.posts[action.payload.index].showingComments;
        },
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
        [loadComments.pending]:(state,action) =>{
            //state.posts[action.payload.index].commentsLoading = true;
            //state.posts[action.payload.index].commentsHasError = false;
        },
        [loadComments.fulfilled]:(state,action) =>{
            state.posts[action.payload.index].commentsLoading = false;
            state.posts[action.payload.index].commentsHasError = false;
            state.posts[action.payload.index].showingComments = true;
            state.posts[action.payload.index].comments = action.payload.commentData;
        },
        [loadComments.rejected]:(state,action) =>{
            //state.posts[action.payload.index].commentsLoading = false;
            //state.posts[action.payload.index].commentsHasError = true;
        },
    }
});

export const selectAllContents = (state) => state.content.posts;

export const isLoading = (state) => state.content.isLoading;

export const hasError = (state) => state.content.hasError;

export const {toggleComments} = contentSlice.actions;

export default contentSlice.reducer;
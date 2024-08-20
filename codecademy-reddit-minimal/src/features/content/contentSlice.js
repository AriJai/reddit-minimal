import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadPopular = createAsyncThunk(
    'content/loadPopular', // action type
    async (arg, thunkAPI) => {
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
    async ({search}, thunkAPI) => {
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

const applyReplyValue = (commentData) => {
    if (typeof commentData.replies === "object") {
        commentData.replies.data.children.map((reply) => {
            if (reply.data.body) {
                if (typeof reply.data.replies === "object"){
                    reply.data.showingReplies = false;
                    applyReplyValue(reply.data);
                } else {return}
            } else {return}
        });
        
    } else {
        return 
    }
}

export const loadComments = createAsyncThunk(
    'content/loadComments',
    async ({index, permalink}) => {
        const comments = await fetch(`https://www.reddit.com${permalink}.json`);
        const json = await comments.json();
        const commentData = json[1].data.children.map((comment) => comment.data);
        commentData.map((comment) => comment.showingReplies = false);
        commentData.map((comment) => applyReplyValue(comment));
        return {index, commentData};
    }
);
const searchReply = (obj, idToFind) => {
    obj?.replies?.data?.children.forEach((item) => {
        if( item?.data?.id !== idToFind) {
            searchReply(item?.data, idToFind);
        } else {
            item.data.showingReplies = true;
            return item?.data;
        }
    })
    return null;
};

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
        toggleReply(state,action) {
            const {postId, commentId, comment, idToFind} = action.payload;
            let commentFound = state.posts[postId].comments[commentId];
            if( commentFound.id !== idToFind) {
                searchReply(commentFound, idToFind);
            } else {
                commentFound.showingReplies = !commentFound.showingReplies;
            }
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
            state.posts[action.payload.index].commentsLoading = false;
            state.posts[action.payload.index].commentsHasError = true;
        },
    }
});

export const selectAllContents = (state) => state.content.posts;

export const isLoading = (state) => state.content.isLoading;

export const hasError = (state) => state.content.hasError;

export const {toggleComments, toggleReply} = contentSlice.actions;

export default contentSlice.reducer;
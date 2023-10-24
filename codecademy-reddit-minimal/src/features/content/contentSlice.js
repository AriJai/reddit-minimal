import { fetchPopular } from '../../util/Reddit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const loadPopular = createAsyncThunk(
    'content/loadPopular', // action type
    async (arg, thunkAPI) => {
        const data = await fetchPopular()
        const json = await data.json()
        return json
    }
);

export const contentSlice = createSlice({
    name: "content'",
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false,
    },
    reducers: {

    }
});

export default contentSlice.reducer;
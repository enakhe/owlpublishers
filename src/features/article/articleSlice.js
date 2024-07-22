import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import articleService from './articleService';

const initialState = {
    article: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

// Create new article
export const createArticle = createAsyncThunk('article/create', async (articleData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await articleService.createArticle(articleData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})


export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createArticle.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createArticle.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.article.push(action.payload);
            })
            .addCase(createArticle.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload
            })
    }
});

export const { reset } = articleSlice.actions
export default articleSlice.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// signup user
export const signup = createAsyncThunk('auth/signup', async (user, thunkAPI) => {
    try {
        return await authService.signup(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        console.log(message);
        return thunkAPI.rejectWithValue(message);
    }
})

// signin user
export const signin = createAsyncThunk('auth/signin', async (user, thunkAPI) => {
    try {
        return await authService.signin(user);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// verify user email
export const verifyEmail = createAsyncThunk('auth/verifyEmail', async (codeData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await authService.verifyEmail(codeData, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// get verification code
export const getVerificationCode = createAsyncThunk('auth/getVerificationCode', async (thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await authService.getVerificationCode(token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Post Personal Information
export const personalInfo = createAsyncThunk('auth/personalInfo', async (personalData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await authService.personalInfo(personalData, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout();
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.isLoading = true
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(signup.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })

            .addCase(signin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(signin.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(signin.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })

            .addCase(verifyEmail.pending, (state) => {
                state.isLoading = true
            })
            .addCase(verifyEmail.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(verifyEmail.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            .addCase(personalInfo.pending, (state) => {
                state.isLoading = true
            })
            .addCase(personalInfo.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(personalInfo.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            .addCase(getVerificationCode.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getVerificationCode.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(getVerificationCode.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            .addCase(logout.fulfilled, (state) => {
                state.user = null
            });
    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
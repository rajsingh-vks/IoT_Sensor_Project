import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// export const signup = createAsyncThunk(
//     'auth/signup',
//     async (userData, thunkAPI) => {
//         try {
//             return await signupUser(userData);
//         } catch (err) {
//             return thunkAPI.rejectWithValue(err.response.data);
//         }
//     }
// );

export const signup = createAsyncThunk(
    'auth/signup',
    async (userData, thunkAPI) => {
      try {
        const response = await axios.post('http://localhost:3000/api/users/signup', userData);
        return response.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || err.message);
      }
    }
  );

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Something went wrong';
            });
    },
});

export default authSlice.reducer;
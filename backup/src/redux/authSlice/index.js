import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userData, { rejectWithValue }) => {
    try {
      //   const response = await fetch('http://localhost:3000/api/users/signup', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(userData),
      //   });

      const response = await fetch('http://localhost:3000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Signup failed');
      }

      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    error: null,
    success: false, // Make sure you have this success flag
  },
  reducers: {
    signupUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    signupUserSuccess(state) {
      state.loading = false;
      state.success = true; // Set success to true upon successful signup
    },
    signupUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signupUserStart, signupUserSuccess, signupUserFailure } = authSlice.actions;

export default authSlice.reducer;

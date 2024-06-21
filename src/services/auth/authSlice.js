// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axiosClient from "../../api/LoginApi";

// export const login = createAsyncThunk(
//   "auth/login",
//   async ({ username, password }, { rejectWithValue }) => {
//     try {
//       const response = await axiosClient.post("/login", {
//         username,
//         password,
//       });
//       return response.data;
//     } catch (error) {
//       // Customize error message based on response
//       let errorMsg = "An error occurred. Please try again.";
//       if (error.response && error.response.data) {
//         errorMsg = error.response.data.message || errorMsg;
//       }
//       return rejectWithValue(errorMsg);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,
//     token: null,
//     status: "idle",
//     error: null,
//   },
//   reducers: {
//     logout(state) {
//       state.user = null;
//       state.token = null;
//       localStorage.removeItem("user");
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         localStorage.setItem("user", JSON.stringify(action.payload.user));
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import loginApi from "../../api/LoginApi";

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const user = await loginApi({ username, password });
      console.log("API response user:", user);
      return { user };
    } catch (error) {
      let errorMsg = "An error occurred. Please try again.";
      if (error.response && error.response.data) {
        errorMsg = error.response.data.message || errorMsg;
      }
      return rejectWithValue(errorMsg);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

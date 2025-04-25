import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../../supabaseClient";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, { rejectWithValue }) => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      return rejectWithValue(error.message);
    }

    return user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Erreur utilisateur";
      });
  },
});

export default userSlice.reducer;

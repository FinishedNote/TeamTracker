import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../../supabaseClient";

export const fetchUserTeams = createAsyncThunk(
  "teams/fetchUserTeams",
  async (_, { rejectWithValue }) => {
    const { data, error } = await supabase
      .from("teams")
      .select("*")
      .eq("user_id", supabase.auth.getUser().data?.user?.id);

    if (error) {
      return rejectWithValue(error.message);
    }

    return data;
  }
);

const teamsSlice = createSlice({
  name: "teams",
  initialState: {
    teams: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetTeams: (state) => {
      state.teams = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserTeams.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserTeams.fulfilled, (state, action) => {
        state.loading = false;
        state.teams = action.payload;
      })
      .addCase(fetchUserTeams.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Une erreur est survenue.";
      });
  },
});

export const { resetTeams } = teamsSlice.actions;
export default teamsSlice.reducer;

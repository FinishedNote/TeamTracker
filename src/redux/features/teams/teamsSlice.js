import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTeams, createTeam, updateTeam, deleteTeam } from "./teamsAPI";

export const getTeams = createAsyncThunk("teams/fetchTeams", fetchTeams)
export const addTeam = createAsyncThunk("teams/createTeam", createTeam)
export const editTeam = createAsyncThunk("teams/updateTeam", updateTeam)
export const removeTeam = createAsyncThunk("teams/deleteTeam", deleteTeam)

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
      .addCase(getTeams.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTeams.fulfilled, (state, action) => {
        state.loading = false;
        state.teams = action.payload;
      })
      .addCase(getTeams.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Une erreur est survenue.";
      })
      .addCase(addTeam.fulfilled, (state, action) => {
        state.list(push(action.payload));
      })
  },
});

export const { resetTeams } = teamsSlice.actions;
export default teamsSlice.reducer;

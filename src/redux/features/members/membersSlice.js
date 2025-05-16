import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchMembers,
  createMembers,
  updateMembers,
  deleteMembers,
} from "./membersAPI";

export const getMembers = createAsyncThunk(
  "members/fetchMembers",
  fetchMembers
);
export const addMembers = createAsyncThunk(
  "members/createMembers",
  createMembers
);
export const editMembers = createAsyncThunk(
  "members/updateMembers",
  updateMembers
);
export const removeMembers = createAsyncThunk(
  "members/deleteMembers",
  deleteMembers
);

const membersSlice = createSlice({
  name: "members",
  initialState: {
    members: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetMembers: (state) => {
      state.members = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMembers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMembers.fulfilled, (state, action) => {
        state.loading = false;
        state.members = action.payload;
      })
      .addCase(getMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Une erreur est survenue.";
      })
      .addCase(addMembers.fulfilled, (state, action) => {
        state.members.push(action.payload);
      });
  },
});

export const { resetMembers } = membersSlice.actions;
export default membersSlice.reducer;

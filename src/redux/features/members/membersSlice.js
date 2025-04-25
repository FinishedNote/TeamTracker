import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../../supabaseClient";

export const fetchUser = createAsyncThunk(
    "teams/fetchUser",
    async (_, { rejectWithValue }) => {
        const {
            data: { user },
            error: authError,
        } = await supabase.auth.getUser();

        if (authError) {
            return rejectWithValue(authError.message);
        }

        // const { data, error } = await supabase
        //   .from("team_members")
        //   .select("*")
        //   .eq("user_id", user.id);

        if (error) {
            return rejectWithValue(error.message);
        }

        return user;
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
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.teams = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Une erreur est survenue.";
            });
    },
});

export const { resetTeams } = teamsSlice.actions;
export default teamsSlice.reducer;

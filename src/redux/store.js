import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "./features/teams/teamsSlice";

export const store = configureStore({
  reducer: {
    teams: teamsReducer,
  },
  devTools: true, // TODO: changer sur false au lancement
});

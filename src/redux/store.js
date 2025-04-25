import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "./features/teams/teamsSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    teams: teamsReducer,
    user: userReducer,
  },
  devTools: true, // TODO: changer sur false au lancement
});

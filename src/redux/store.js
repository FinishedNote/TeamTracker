import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "./features/teams/teamsSlice";
import userReducer from "./features/user/userSlice";
import sidebarReducer from "./features/sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    teams: teamsReducer,
    user: userReducer,
    sidebar: sidebarReducer,
  },
  devTools: true, // TODO: changer sur false au lancement
});

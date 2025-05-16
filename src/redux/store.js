import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "./features/teams/teamsSlice";
import userReducer from "./features/user/userSlice";
import membersReducer from "./features/members/membersSlice";

export const store = configureStore({
  reducer: {
    teams: teamsReducer,
    user: userReducer,
    members: membersReducer,
  },
  devTools: true, // TODO: changer sur false au lancement
});

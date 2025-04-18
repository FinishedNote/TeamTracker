import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // users: usersReducer,
  },
  devTools: true, // TODO: changer sur false au lancement
});

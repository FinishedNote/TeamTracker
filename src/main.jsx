import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./scss/main.scss";
import { Provider } from "react-redux";
import { SidebarProvider } from "./context/SidebarContext";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </StrictMode>
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter} from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { HistoryContextProvider } from "./context/HistoryContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <BrowserRouter>
    <AuthContextProvider>
    <HistoryContextProvider>
      <App />
      </HistoryContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

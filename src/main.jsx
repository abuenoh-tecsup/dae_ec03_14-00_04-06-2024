import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.jsx";
import "@fontsource-variable/open-sans";
import "@fontsource-variable/roboto";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      <App />
    </BrowserRouter>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../src/App.jsx";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>
);

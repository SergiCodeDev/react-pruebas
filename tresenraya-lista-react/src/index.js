import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import Lista from "./Lista"

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <br/>
    <Lista />
  </StrictMode>
);
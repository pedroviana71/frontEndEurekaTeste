import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import styles from "./utils/styles/normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App styles={styles} />
  </React.StrictMode>
);

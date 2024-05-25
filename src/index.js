// External dependencies
import React from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

// Internal dependencies
import App from "./App";

// Create a root for the React application
const root = createRoot(document.getElementById("root"));

// Render the App component into the root
root.render(<App />);
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Router from "./context/Routing";

/* Render the App component here
   Using Router component so that pageMapping can be user globally
   anywhere in the project */
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

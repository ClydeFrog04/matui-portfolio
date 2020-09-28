import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {ThemeProvider} from "@material-ui/core/styles";
import lightTheme from "./themes/darkTheme";
import {PortfolioProvider} from "./contexts/portfolioContext";
import {BrowserRouter as Router} from "react-router-dom";
import "./components/StarryBackgroundStyles.css";

ReactDOM.render(
    <ThemeProvider theme={lightTheme}>
        <Router>
            <PortfolioProvider>
                <App/>
            </PortfolioProvider>
        </Router>
    </ThemeProvider>,
    document.getElementById("root")
);
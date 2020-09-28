import React, {useContext} from 'react';
import './App.css';
import Navbar from "./components/navigation/Navbar";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Switch, Route} from "react-router-dom";
import {PortfolioContext} from "./contexts/portfolioContext";
import ProjectPage from "./components/project/ProjectPage";
import StarryBackground from "./components/StarryBackground";

function App() {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            para: {
                color: theme.typography.p.color,
            }
        }),
    );
    const classes = useStyles();
    const {projects} = useContext(PortfolioContext);

    return (
        <div className="App">
            <StarryBackground/>
            <Navbar/>
            <Switch>
                <Route exact path={"/"}>
                    <ProjectPage/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
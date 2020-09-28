import React, {useContext} from 'react';
import './App.css';
import Navbar from "./components/navigation/Navbar";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Switch, Route} from "react-router-dom";
import ProjectCard from "./components/project/ProjectCard";
import {PortfolioContext} from "./contexts/portfolioContext";
import ProjectPage from "./components/project/ProjectPage";

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

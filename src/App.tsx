import React, {useContext} from 'react';
import './App.css';
import Navbar from "./components/navigation/Navbar";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Switch, Route} from "react-router-dom";
import ProjectCard from "./components/project/ProjectCard";
import {PortfolioContext} from "./contexts/portfolioContext";

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
            {/*todo: ask William about this.
            //@ts-ignore*/}
            <Navbar/>
            <Switch>
                <Route exact path={"/"}>
                    <ProjectCard project={projects[0]}/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;

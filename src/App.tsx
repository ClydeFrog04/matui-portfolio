import React, {useContext} from 'react';
import './App.css';
import Navbar from "./components/navigation/Navbar";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Switch, Route} from "react-router-dom";
import {PortfolioContext} from "./contexts/portfolioContext";
import ProjectPage from "./components/project/ProjectPage";
import StarryBackground from "./components/StarryBackground";
import ContactForm from "./components/forms/ContactForm";
import AboutMe from "./components/About/AboutMe";
import MazeGame from "./components/MazeGame/MazeGame";

function App() {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            para: {
                color: theme.typography.p.color,
            }
        }),
    );
    const classes = useStyles();
    const {projects, aboutMeOpen} = useContext(PortfolioContext);

    return (
        <div className="App">
            <StarryBackground/>
            <Navbar/>
            <AboutMe />
            <Switch>
                <Route exact path={"/"}>
                    <ProjectPage/>
                </Route>
                <Route path={"/contact"}>
                    <ContactForm/>
                </Route>
                <Route path={"/mazeGame"}>
                    <MazeGame/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;

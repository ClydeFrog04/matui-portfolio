import React, {useContext, useState} from "react";
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
import Modal from "@material-ui/core/Modal";

function App() {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            para: {
                color: theme.typography.p.color,
            },

            //wip styles
            container:{
                border: "none",
            },
            modal: {
                position: 'absolute',
                width: "80vw",
                backgroundColor: theme.palette.common.containerBG,
                boxShadow: theme.shadows[5],
                padding: theme.spacing(2, 4, 3),
                color: "white",
                top: "20%",
                //left: "10%",
                left: `calc(50% - ${80 / 2}vw)`,
                display: "flex",
                flexDirection: "column",
                textAlign: "center"

            },
            name:{
                fontSize: "3rem",
                padding: theme.spacing(1),
            },
            info:{
                padding: theme.spacing(1)
            }
        }),
    );
    const classes = useStyles();
    const {projects, aboutMeOpen} = useContext(PortfolioContext);

    const [wip, setWip] = useState(true);
    const handleClose = () => {
        if(wip) setWip(false);
    }

    return (
        <div className="App">
            <StarryBackground/>
            <Navbar/>
            <AboutMe />
            <Modal
                open={wip}
                onClose={handleClose}
                className={classes.container}>
                <div className={classes.modal}>
                    <h1 className={classes.name}>Under Construction!</h1>
                    <span className={classes.info}>This site is still a work in progress. Some links and buttons may not work fully or as expected yet, but I'm currently working on fixing those! I hope you take the time to look around at what is working at the moment!</span>
                </div>
            </Modal>
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

import React, {useContext} from "react";
import Modal from '@material-ui/core/Modal';
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {PortfolioContext} from "../../contexts/portfolioContext";



const modalWidth = 80;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
            left: `calc(50% - ${modalWidth / 2}vw)`,
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

const AboutMe = () =>{
    const classes = useStyles();
    const {aboutMeOpen, setAboutMeOpen} = useContext(PortfolioContext);

    const handleClose = () => {
        if(setAboutMeOpen) setAboutMeOpen(!aboutMeOpen);
    }

    return (
        //todo: Make modal increase view height so the content is scrollable
        <Modal
        open={aboutMeOpen!}
        onClose={handleClose}
        className={classes.container}>
            <div className={classes.modal}>
                <h1 className={classes.name}>Randy Egan</h1>
                <span className={classes.info}>Hi there! Thanks for taking the time to checkout my site! It's still a work in progress but I hope you enjoy your time here!  After graduating with an associates degree in computer science, I began exploring my love for programming. I found that I enjoy learning new skills, as well as honing my current skills. I’ve written code in many languages, with bigger projects being written with java, c# and various js libraries. I love working on exciting new projects and would love the opportunity to bring my programming and leadership skills to the table!</span>
                <span className={classes.info}>When I'm not writing code, I enjoy playing drums, hockey, spending time outdoors, and playing video games.</span>
            </div>
        </Modal>
    );
}

export default AboutMe;

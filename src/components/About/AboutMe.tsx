import React, {useContext} from "react";
import Modal from '@material-ui/core/Modal';
import {Avatar, createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {PortfolioContext} from "../../contexts/portfolioContext";
import profilePicture from "../../assets/meProfilePictureSmall.png";



const modalWidth = 80;
const borderColor = "#181818";
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
            alignItems: "center",
            textAlign: "center",
            borderRadius: "4px"

        },
        name:{
            fontSize: "3rem",
            padding: theme.spacing(1),
        },
        info:{
            padding: theme.spacing(1)
        },
        avatar:{
            border: `4px solid ${borderColor}`,
            width: 200,
            height: 200,
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
                <h1 className={classes.name}>Randi Egan</h1>
                <Avatar className={classes.avatar} alt="Randi Egan" src={profilePicture}/>
                <span className={classes.info}>Hi there! I'm Randi! Thanks for taking the time to checkout my site! It's still a work in progress but I hope you enjoy your time here!<br/>I'm currently a software developer at Dish Network. In my time at Dish I've had the opportunity to work on a few different projects with very different tech stacks. I've gotten a chance to work on web development, mobile development, and embedded development! Before starting my career, I went to school for game development and got an associates degree in game development!</span>
                <span className={classes.info}>When I'm not writing code, I enjoy playing drums, hockey, spending time outdoors, and playing video games.</span>
            </div>
        </Modal>
    );
}

export default AboutMe;

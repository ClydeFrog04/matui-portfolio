import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root:{
            backgroundColor: "black",
            width: "100%",
            height: "100vh",
            position: "fixed",
            backgroundAttachment: "fixed"
        }
    })
);


const Background = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        </div>
    );
};

export default Background;
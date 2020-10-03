import React from "react";
import {
    createStyles,
    FormControl,
    FormHelperText,
    Grid,
    FormLabel,
    Input,
    InputLabel,
    TextareaAutosize,
    Paper,
    Theme, Button, FormGroup
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Navbar from "../navigation/Navbar";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            opacity: "97%",
            width: "100%"
        },
        paper: {
            width: "50%",
            height: "75vh",
            backgroundColor: theme.palette.common.containerBG,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        form: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "left",
            flexDirection: "column",
            width: "66%",
            height: "66%"
        },
        input: {
            color: "black",
            backgroundColor: "#e0e0e0",
            borderRadius: "4px",
            boxShadow: "1px 1px 7px grey",
        },
        inputLabel: {
            color: "black",
            zIndex: 1

        },
        title: {
            color: "white"
        },
        helperText: {
            color: "white"
        },
        textArea: {
            height: "60%",
            backgroundColor: "#e0e0e0",
            borderRadius: "4px",
            boxShadow: "1px 1px 7px grey",
            resize: "none"

        }
    })
);

const ContactForm = () => {
    const classes = useStyles();

    return (
        <>
            <Navbar/>
            <Grid
                container
                className={classes.root}
                spacing={2}
                justify="center"
                alignItems="center"
            >
                <Paper className={classes.paper}>
                        <FormGroup className={classes.form}>
                            <FormLabel className={classes.title}>Contact me</FormLabel>
                            <FormControl>
                                <InputLabel className={classes.inputLabel} htmlFor="my-input">Email address</InputLabel>
                                <Input className={classes.input} id="my-input" aria-describedby="my-helper-text"/>
                                <FormHelperText className={classes.helperText} id="my-helper-text">We'll never share
                                    your
                                    email.</FormHelperText>
                            </FormControl>
                            <textarea className={classes.textArea}/>
                            <Button variant="contained">Send!</Button>
                        </FormGroup>
                </Paper>
            </Grid>
        </>
    );
};

export default ContactForm;
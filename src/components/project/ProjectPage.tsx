import React, {useContext} from "react"
import Navbar from "../navigation/Navbar";
import {createStyles, makeStyles, Theme, useTheme} from "@material-ui/core/styles";
import {Grid, Paper, useMediaQuery} from "@material-ui/core";
import {PortfolioContext} from "../../contexts/portfolioContext";
import ProjectCard from "./ProjectCard";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            opacity: "95%",
            width: "100%",
            margin: "auto"
        },
        paper: {
            width: "75%",
            padding: theme.spacing(2),
            backgroundColor: "#444"//todo: create a background color in theme
        },
        card: {
            width: "50%",
        [theme.breakpoints.down("sm")]: {
                width: "75%"
        },
        },
        pageBottomMargin:{...theme.mixins.toolbar},
    })
);

const ProjectPage = () => {
    const classes = useStyles();
    const theme = useTheme();

    const mobile = useMediaQuery(theme.breakpoints.down("sm"));
    const tablet = useMediaQuery(theme.breakpoints.down("md"));

    const {projects} = useContext(PortfolioContext);

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
                    <Grid
                        container
                        justify={mobile ? "center" : tablet ? "space-between" : "space-around"}
                        direction={mobile ? "column" : "row"}
                        alignItems="center"
                        spacing={2}
                    >
                        {
                            projects?.map((project, index) => {
                                return (
                                    <Grid key={index} item className={classes.card}>
                                        <ProjectCard project={project}/>
                                    </Grid>
                                );
                            })
                        }
                    </Grid>
                </Paper>
            </Grid>
            <div className={classes.pageBottomMargin}/>
        </>
    );
}

export default ProjectPage;

/*

export default function App() {
  const classes = useStyles();

  return (
    // this grid controls the layout of the entire component
    <Grid>
      <Paper className={classes.paper}>
        {/* this grid controls the layout of the cards
<Grid container justify="center" alignItems="center" spacing={2}>
    {[...new Array(12)].map(() => {
        return (
            // this grid tells matui that the items inside are a part of the next highest grid container
            <Grid item className={classes.card}>
                <ProjectCard />
            </Grid>
        );
    })}
</Grid>
</Paper>
</Grid>
);
}
 */

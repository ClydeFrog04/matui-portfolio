import React, {MouseEvent} from "react";
import {IProject} from "../../interfaces/projectInterfaces";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Typography
} from "@material-ui/core";


interface ProjectCardProps {
    project: IProject;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        media: {
            height: 238

        }
    }),
);

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
    console.log("creating project card");
    const history = useHistory();
    const {
        images,
        name,
        timeSpent,
        numContributors,
        role,
        description,
        stack,
        route,
        learnMore
    } = project;
    const classes = useStyles();

    const playLinks = () => {
        console.log(route);
        if (route) {
            history.push(`/${route}`);
        }
    };


    return (
        //this grid controls the layout of the entire component
        <div className="card">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={images[0].src}
                        title={images[0].alt}
                        onClick={playLinks}
                    />
                    <CardContent>
                        {/*todo: create typography styles in theme*/}
                        <Typography gutterBottom variant="h5" component="h2">{name}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={playLinks} size="small" color="primary">
                        {(route && route === "mazeGame") ? "Play Now!" : null}
                    </Button>
                    {learnMore ?
                        <a href={learnMore} target={"blank"} style={{textDecoration: "none"}}>
                            <Button size="small" color="primary">
                                Learn More!
                            </Button>
                        </a> : null
                    }
                </CardActions>
            </Card>
        </div>
    );
};

export default ProjectCard;

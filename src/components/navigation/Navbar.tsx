import React from "react"
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography,
    useScrollTrigger,
    CssBaseline,
    Container, Box
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {NavigationMenu} from "./NavigationMenu";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        toolbarMargin: {...theme.mixins.toolbar},
        appBar:{
            backgroundColor: theme.palette.common.appBarBG,
        }
    }),
);

interface Props {
    children?: React.ReactElement;
}

const ElevationScroll = (props:Props) => {
    const {children} = props;
    if(!children) throw new Error("Navbar children undefined");
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const Navbar = (props:Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <ElevationScroll {...props}>
                <AppBar className={classes.appBar} position="fixed">
                    <Toolbar>
                        {/*todo: menu component goes here*/}
                        <NavigationMenu/>
                        <Typography variant="h6" className={classes.title}>
                            Randi Egan
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </div>
    );
}

export default Navbar;

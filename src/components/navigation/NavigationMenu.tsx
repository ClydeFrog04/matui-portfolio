import React, {useContext, useState} from "react";
import clsx from "clsx";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import {
    Button,
    Divider,
    Drawer, Grid,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    SvgIcon
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import WebIcon from '@material-ui/icons/Web';
import DescriptionIcon from '@material-ui/icons/Description';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CloseTwoToneIcon from "@material-ui/icons/CloseTwoTone";
import AboutMe from "../About/AboutMe";
import {PortfolioContext} from "../../contexts/portfolioContext";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        menuButtonRight: {
            // marginLeft: theme.spacing(25),
            alignSelf: "flex-end"
        },
        list: {
            width: 250,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            [theme.breakpoints.down("xs")]: {
                width: "100%"
            },
        },
        listItem: {},
        listGrid: {
            justifyContent: "space-around",
            alignItems: "space-around",
            flexDirection: "column"
        },
        fullList: {
            width: "auto",
        },
        drawer: {
            [theme.breakpoints.down("xs")]: {
                width: "100%"
            },
            backgroundColor: theme.palette.common.drawerBG,
            color: theme.palette.common.drawerFontColor,
        },
    }),
);

type Anchor = "top" | "left" | "bottom" | "right";


export const NavigationMenu = () => {
    const classes = useStyles();
    const [drawerState, setDrawerState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const history = useHistory();
    const [anchor] = useState<Anchor>("left");
    const {aboutMeOpen, setAboutMeOpen} = useContext(PortfolioContext);

    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
        ) return;
        setDrawerState({...drawerState, [anchor]: open});
    };

    const list = (anchor: Anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom"
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <IconButton
                edge="start"
                className={classes.menuButtonRight}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(anchor, true)}
            >
                <CloseTwoToneIcon/>
            </IconButton>
            <List>
                <ListItem button key="Projects" onClick={() => history.push("/")}>
                    <ListItemIcon><WebIcon/></ListItemIcon>
                    <ListItemText primary="Projects"/>
                </ListItem>
                <ListItem button key="About Me" onClick={() => {if(setAboutMeOpen) setAboutMeOpen(!aboutMeOpen)}}>
                    <ListItemIcon><AccountBoxIcon/></ListItemIcon>
                    <ListItemText primary="About Me"/>
                </ListItem>
                <ListItem button key="Resume">
                    <ListItemIcon><DescriptionIcon/></ListItemIcon>
                    <ListItemText primary="Resume"/>
                </ListItem>
            </List>
            <Divider/>

            <List>
                <ListItem button key={"Contact Me"} onClick={() => history.push("/contact")}>
                    <ListItemIcon><AlternateEmailIcon/></ListItemIcon>
                    <ListItemText primary="Contact Me"/>
                </ListItem>
            </List>
        </div>
    );

    return (
        // todo: matui styling
        <div className="navigation-menu">
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(anchor, true)}
            >
                <MenuIcon/>
            </IconButton>
            <Drawer classes={{paper: classes.drawer}} anchor={anchor} open={drawerState[anchor]}
                    onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
            </Drawer>
        </div>
    );
};

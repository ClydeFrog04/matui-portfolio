import React, {useState} from "react";
import clsx from "clsx";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
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
import CloseTwoToneIcon from "@material-ui/icons/CloseTwoTone";


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
    const [anchor] = useState<Anchor>("left");

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
                {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>

            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
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
import React, {useState} from "react";
import clsx from "clsx";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(2),
        },
        list: {
            width: 250,
        },
        fullList: {
            width: "auto",
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
            {(['left', 'right', 'top', 'bottom'] as Anchor[]).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer anchor={anchor} open={drawerState[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
};

/*
export default function TemporaryDrawer() {


  return (
    <div>
      {(['left', 'right', 'top', 'bottom'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

 */


/*
<IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleClick}>
                <MenuIcon/>
                <Menu
                    open={menuVisible}
                    id="navigation-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Projects</MenuItem>
                </Menu>
            </IconButton>
 */
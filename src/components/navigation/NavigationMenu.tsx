import React, {useState} from "react";
import {IconButton, Menu, MenuItem} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(2),
        },
    }),
);


export const NavigationMenu = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [menuVisible, setMenuVisible] = useState<boolean>(false);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setMenuVisible(true);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        console.log("Closing");
        setMenuVisible(false);
        setAnchorEl(null);
    };

    return (
        // todo: matui styling
        <div className="navigation-menu">
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
        </div>
    );
};

/*
export default function SimpleMenu() {
  return (
    <div>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

 */
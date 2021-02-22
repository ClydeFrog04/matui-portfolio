import {createMuiTheme} from "@material-ui/core";

// fonts
const latoFont = "Lato, sans-serif";
const patrickFont = "Patrick Hand SC, cursive";
const robotoFont = "Roboto, sans-serif";

//colors
//lightTheme
const appBarBG = "#4c4c4c";
const appBarFont = "rgba(0,0,0,.5)";
const drawerBG = "#666";
const containerBG = "#444";
const drawerFontColor = "#ddd";
const red = "#ff0000";
const black = "#000";


export default createMuiTheme({
    palette: {
        common: {
            appBarBG: appBarBG,
            appBarFont: appBarFont,
            drawerBG: drawerBG,
            drawerFontColor: drawerFontColor,
            containerBG: containerBG
        }
    },
    typography: {
        h1: {
            fontFamily: patrickFont,
            fontSize: "3rem",
            color: red,
        },
        h2: {
            fontFamily: patrickFont,
        },
        h3: {
            fontFamily: patrickFont,
            fontSize: "2rem",
        },
        h4: {},
        h5: {},
        h6: {},
        p: {
            fontFamily: latoFont,
            color: red,
        },
        subtitle1: {
            fontFamily: latoFont,
        },
        subtitle2: {
            fontFamily: robotoFont,
            fontSize: "1rem",
            fontWeight: "bold",
        },
        body1: {},
        body2: {},
        button: {},
        caption: {},

    },
});

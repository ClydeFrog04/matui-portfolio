import * as createPalette from "@material-ui/core/styles/createPalette";
import {Color, PaletteType} from "@material-ui/core";

declare module "@material-ui/core/styles/createPalette" {
    interface CommonColors {
        appBarBG: string;
        appBarFont: string;
        drawerBG: string;
        drawerFontColor: string;
        containerBG: string;
    }

    interface Palette {
        common: CommonColors;
    }

    interface PaletteOptions {
        common?: Partial<CommonColors>;
    }
}
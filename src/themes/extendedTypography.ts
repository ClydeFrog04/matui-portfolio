import * as createTyography from "@material-ui/core/styles/createTypography";
import {
    FontStyle, FontStyleOptions,
    TypographyStyle,
    TypographyStyleOptions,
    TypographyUtils,
    Variant
} from "@material-ui/core/styles/createTypography";

declare module "@material-ui/core/styles/createTypography"{
    type myVariant = 'p';

    interface Typography extends Record<myVariant, TypographyStyle>, FontStyle, TypographyUtils {}

    interface TypographyOptions
        extends Partial<Record<myVariant, TypographyStyleOptions> & FontStyleOptions> {}
}
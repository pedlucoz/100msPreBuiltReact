/// <reference types="react" />
import type * as Stitches from '@stitches/react';
declare const HmsStitches: import("@stitches/react/types/stitches").default<"hms-ui", {
    allowMotion: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    ls: string;
}, {
    colors: {
        primary_default: string;
        primary_bright: string;
        primary_dim: string;
        primary_disabled: string;
        on_primary_high: string;
        on_primary_medium: string;
        on_primary_low: string;
        secondary_default: string;
        secondary_bright: string;
        secondary_dim: string;
        secondary_disabled: string;
        on_secondary_high: string;
        on_secondary_medium: string;
        on_secondary_low: string;
        background_default: string;
        background_dim: string;
        surface_default: string;
        surface_bright: string;
        surface_brighter: string;
        surface_dim: string;
        on_surface_high: string;
        on_surface_medium: string;
        on_surface_low: string;
        border_default: string;
        border_bright: string;
        alert_success: string;
        alert_warning: string;
        alert_error_default: string;
        alert_error_bright: string;
        alert_error_brighter: string;
        alert_error_dim: string;
    };
    shadows: {
        sm: string;
        md: string;
    };
    fonts: {
        sans: string;
    };
    fontSizes: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        tiny: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    fontWeights: {
        semiBold: number;
        medium: number;
        regular: number;
    };
    lineHeights: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        tiny: string;
        xs: string;
        sm: string;
        md: string;
    };
    radii: {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        round: string;
    };
    space: {
        0: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        px: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        100: string;
    };
    borderWidths: {
        light: string;
        normal: string;
        bold: string;
        extrabold: string;
        black: string;
    };
}, {
    width: string;
    height: string;
    minWidth: string;
    maxWidth: string;
    minHeight: string;
    maxHeight: string;
    flexBasis: string;
    gridTemplateColumns: string;
    gridTemplateRows: string;
    blockSize: string;
    minBlockSize: string;
    maxBlockSize: string;
    inlineSize: string;
    minInlineSize: string;
    maxInlineSize: string;
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    bg: (value: {
        readonly [Stitches.$$PropertyValue]: "backgroundColor";
    }) => {
        backgroundColor: {
            readonly [Stitches.$$PropertyValue]: "backgroundColor";
        };
    };
    c: (value: {
        readonly [Stitches.$$PropertyValue]: "color";
    }) => {
        color: {
            readonly [Stitches.$$PropertyValue]: "color";
        };
    };
    r: (value: {
        readonly [Stitches.$$ScaleValue]: "radii";
    }) => {
        borderRadius: {
            readonly [Stitches.$$ScaleValue]: "radii";
        };
    };
    fs: (value: string | number | {
        readonly [Stitches.$$PropertyValue]: "fontSize";
    }) => {
        fontSize: string | number | {
            readonly [Stitches.$$PropertyValue]: "fontSize";
        };
    };
    size: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        height: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        width: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    w: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        width: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    h: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        height: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    p: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        padding: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pt: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pr: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pb: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pl: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    px: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        paddingRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    py: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        paddingBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    m: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        margin: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mt: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mr: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mb: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    ml: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mx: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        marginRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    my: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        marginBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
}>;
export declare const theme: string & {
    className: string;
    selector: string;
} & {
    colors: {
        primary_default: import("@stitches/react/types/theme").Token<"primary_default", string, "colors", "hms-ui">;
        primary_bright: import("@stitches/react/types/theme").Token<"primary_bright", string, "colors", "hms-ui">;
        primary_dim: import("@stitches/react/types/theme").Token<"primary_dim", string, "colors", "hms-ui">;
        primary_disabled: import("@stitches/react/types/theme").Token<"primary_disabled", string, "colors", "hms-ui">;
        on_primary_high: import("@stitches/react/types/theme").Token<"on_primary_high", string, "colors", "hms-ui">;
        on_primary_medium: import("@stitches/react/types/theme").Token<"on_primary_medium", string, "colors", "hms-ui">;
        on_primary_low: import("@stitches/react/types/theme").Token<"on_primary_low", string, "colors", "hms-ui">;
        secondary_default: import("@stitches/react/types/theme").Token<"secondary_default", string, "colors", "hms-ui">;
        secondary_bright: import("@stitches/react/types/theme").Token<"secondary_bright", string, "colors", "hms-ui">;
        secondary_dim: import("@stitches/react/types/theme").Token<"secondary_dim", string, "colors", "hms-ui">;
        secondary_disabled: import("@stitches/react/types/theme").Token<"secondary_disabled", string, "colors", "hms-ui">;
        on_secondary_high: import("@stitches/react/types/theme").Token<"on_secondary_high", string, "colors", "hms-ui">;
        on_secondary_medium: import("@stitches/react/types/theme").Token<"on_secondary_medium", string, "colors", "hms-ui">;
        on_secondary_low: import("@stitches/react/types/theme").Token<"on_secondary_low", string, "colors", "hms-ui">;
        background_default: import("@stitches/react/types/theme").Token<"background_default", string, "colors", "hms-ui">;
        background_dim: import("@stitches/react/types/theme").Token<"background_dim", string, "colors", "hms-ui">;
        surface_default: import("@stitches/react/types/theme").Token<"surface_default", string, "colors", "hms-ui">;
        surface_bright: import("@stitches/react/types/theme").Token<"surface_bright", string, "colors", "hms-ui">;
        surface_brighter: import("@stitches/react/types/theme").Token<"surface_brighter", string, "colors", "hms-ui">;
        surface_dim: import("@stitches/react/types/theme").Token<"surface_dim", string, "colors", "hms-ui">;
        on_surface_high: import("@stitches/react/types/theme").Token<"on_surface_high", string, "colors", "hms-ui">;
        on_surface_medium: import("@stitches/react/types/theme").Token<"on_surface_medium", string, "colors", "hms-ui">;
        on_surface_low: import("@stitches/react/types/theme").Token<"on_surface_low", string, "colors", "hms-ui">;
        border_default: import("@stitches/react/types/theme").Token<"border_default", string, "colors", "hms-ui">;
        border_bright: import("@stitches/react/types/theme").Token<"border_bright", string, "colors", "hms-ui">;
        alert_success: import("@stitches/react/types/theme").Token<"alert_success", string, "colors", "hms-ui">;
        alert_warning: import("@stitches/react/types/theme").Token<"alert_warning", string, "colors", "hms-ui">;
        alert_error_default: import("@stitches/react/types/theme").Token<"alert_error_default", string, "colors", "hms-ui">;
        alert_error_bright: import("@stitches/react/types/theme").Token<"alert_error_bright", string, "colors", "hms-ui">;
        alert_error_brighter: import("@stitches/react/types/theme").Token<"alert_error_brighter", string, "colors", "hms-ui">;
        alert_error_dim: import("@stitches/react/types/theme").Token<"alert_error_dim", string, "colors", "hms-ui">;
    };
    shadows: {
        sm: import("@stitches/react/types/theme").Token<"sm", string, "shadows", "hms-ui">;
        md: import("@stitches/react/types/theme").Token<"md", string, "shadows", "hms-ui">;
    };
    fonts: {
        sans: import("@stitches/react/types/theme").Token<"sans", string, "fonts", "hms-ui">;
    };
    fontSizes: {
        h1: import("@stitches/react/types/theme").Token<"h1", string, "fontSizes", "hms-ui">;
        h2: import("@stitches/react/types/theme").Token<"h2", string, "fontSizes", "hms-ui">;
        h3: import("@stitches/react/types/theme").Token<"h3", string, "fontSizes", "hms-ui">;
        h4: import("@stitches/react/types/theme").Token<"h4", string, "fontSizes", "hms-ui">;
        h5: import("@stitches/react/types/theme").Token<"h5", string, "fontSizes", "hms-ui">;
        h6: import("@stitches/react/types/theme").Token<"h6", string, "fontSizes", "hms-ui">;
        tiny: import("@stitches/react/types/theme").Token<"tiny", string, "fontSizes", "hms-ui">;
        xs: import("@stitches/react/types/theme").Token<"xs", string, "fontSizes", "hms-ui">;
        sm: import("@stitches/react/types/theme").Token<"sm", string, "fontSizes", "hms-ui">;
        md: import("@stitches/react/types/theme").Token<"md", string, "fontSizes", "hms-ui">;
        lg: import("@stitches/react/types/theme").Token<"lg", string, "fontSizes", "hms-ui">;
    };
    fontWeights: {
        semiBold: import("@stitches/react/types/theme").Token<"semiBold", string, "fontWeights", "hms-ui">;
        medium: import("@stitches/react/types/theme").Token<"medium", string, "fontWeights", "hms-ui">;
        regular: import("@stitches/react/types/theme").Token<"regular", string, "fontWeights", "hms-ui">;
    };
    lineHeights: {
        h1: import("@stitches/react/types/theme").Token<"h1", string, "lineHeights", "hms-ui">;
        h2: import("@stitches/react/types/theme").Token<"h2", string, "lineHeights", "hms-ui">;
        h3: import("@stitches/react/types/theme").Token<"h3", string, "lineHeights", "hms-ui">;
        h4: import("@stitches/react/types/theme").Token<"h4", string, "lineHeights", "hms-ui">;
        h5: import("@stitches/react/types/theme").Token<"h5", string, "lineHeights", "hms-ui">;
        h6: import("@stitches/react/types/theme").Token<"h6", string, "lineHeights", "hms-ui">;
        tiny: import("@stitches/react/types/theme").Token<"tiny", string, "lineHeights", "hms-ui">;
        xs: import("@stitches/react/types/theme").Token<"xs", string, "lineHeights", "hms-ui">;
        sm: import("@stitches/react/types/theme").Token<"sm", string, "lineHeights", "hms-ui">;
        md: import("@stitches/react/types/theme").Token<"md", string, "lineHeights", "hms-ui">;
    };
    radii: {
        0: import("@stitches/react/types/theme").Token<"0", string, "radii", "hms-ui">;
        1: import("@stitches/react/types/theme").Token<"1", string, "radii", "hms-ui">;
        2: import("@stitches/react/types/theme").Token<"2", string, "radii", "hms-ui">;
        3: import("@stitches/react/types/theme").Token<"3", string, "radii", "hms-ui">;
        4: import("@stitches/react/types/theme").Token<"4", string, "radii", "hms-ui">;
        round: import("@stitches/react/types/theme").Token<"round", string, "radii", "hms-ui">;
    };
    space: {
        0: import("@stitches/react/types/theme").Token<"0", string, "space", "hms-ui">;
        xs: import("@stitches/react/types/theme").Token<"xs", string, "space", "hms-ui">;
        sm: import("@stitches/react/types/theme").Token<"sm", string, "space", "hms-ui">;
        md: import("@stitches/react/types/theme").Token<"md", string, "space", "hms-ui">;
        lg: import("@stitches/react/types/theme").Token<"lg", string, "space", "hms-ui">;
        xl: import("@stitches/react/types/theme").Token<"xl", string, "space", "hms-ui">;
        px: import("@stitches/react/types/theme").Token<"px", string, "space", "hms-ui">;
        1: import("@stitches/react/types/theme").Token<"1", string, "space", "hms-ui">;
        2: import("@stitches/react/types/theme").Token<"2", string, "space", "hms-ui">;
        3: import("@stitches/react/types/theme").Token<"3", string, "space", "hms-ui">;
        4: import("@stitches/react/types/theme").Token<"4", string, "space", "hms-ui">;
        5: import("@stitches/react/types/theme").Token<"5", string, "space", "hms-ui">;
        6: import("@stitches/react/types/theme").Token<"6", string, "space", "hms-ui">;
        7: import("@stitches/react/types/theme").Token<"7", string, "space", "hms-ui">;
        8: import("@stitches/react/types/theme").Token<"8", string, "space", "hms-ui">;
        9: import("@stitches/react/types/theme").Token<"9", string, "space", "hms-ui">;
        10: import("@stitches/react/types/theme").Token<"10", string, "space", "hms-ui">;
        11: import("@stitches/react/types/theme").Token<"11", string, "space", "hms-ui">;
        12: import("@stitches/react/types/theme").Token<"12", string, "space", "hms-ui">;
        13: import("@stitches/react/types/theme").Token<"13", string, "space", "hms-ui">;
        14: import("@stitches/react/types/theme").Token<"14", string, "space", "hms-ui">;
        15: import("@stitches/react/types/theme").Token<"15", string, "space", "hms-ui">;
        16: import("@stitches/react/types/theme").Token<"16", string, "space", "hms-ui">;
        17: import("@stitches/react/types/theme").Token<"17", string, "space", "hms-ui">;
        18: import("@stitches/react/types/theme").Token<"18", string, "space", "hms-ui">;
        19: import("@stitches/react/types/theme").Token<"19", string, "space", "hms-ui">;
        20: import("@stitches/react/types/theme").Token<"20", string, "space", "hms-ui">;
        24: import("@stitches/react/types/theme").Token<"24", string, "space", "hms-ui">;
        28: import("@stitches/react/types/theme").Token<"28", string, "space", "hms-ui">;
        32: import("@stitches/react/types/theme").Token<"32", string, "space", "hms-ui">;
        36: import("@stitches/react/types/theme").Token<"36", string, "space", "hms-ui">;
        40: import("@stitches/react/types/theme").Token<"40", string, "space", "hms-ui">;
        44: import("@stitches/react/types/theme").Token<"44", string, "space", "hms-ui">;
        48: import("@stitches/react/types/theme").Token<"48", string, "space", "hms-ui">;
        52: import("@stitches/react/types/theme").Token<"52", string, "space", "hms-ui">;
        56: import("@stitches/react/types/theme").Token<"56", string, "space", "hms-ui">;
        60: import("@stitches/react/types/theme").Token<"60", string, "space", "hms-ui">;
        64: import("@stitches/react/types/theme").Token<"64", string, "space", "hms-ui">;
        72: import("@stitches/react/types/theme").Token<"72", string, "space", "hms-ui">;
        80: import("@stitches/react/types/theme").Token<"80", string, "space", "hms-ui">;
        96: import("@stitches/react/types/theme").Token<"96", string, "space", "hms-ui">;
        100: import("@stitches/react/types/theme").Token<"100", string, "space", "hms-ui">;
    };
    borderWidths: {
        light: import("@stitches/react/types/theme").Token<"light", string, "borderWidths", "hms-ui">;
        normal: import("@stitches/react/types/theme").Token<"normal", string, "borderWidths", "hms-ui">;
        bold: import("@stitches/react/types/theme").Token<"bold", string, "borderWidths", "hms-ui">;
        extrabold: import("@stitches/react/types/theme").Token<"extrabold", string, "borderWidths", "hms-ui">;
        black: import("@stitches/react/types/theme").Token<"black", string, "borderWidths", "hms-ui">;
    };
}, createThemeBase: <Argument0 extends string | ({
    colors?: {
        primary_default?: string | number | boolean | undefined;
        primary_bright?: string | number | boolean | undefined;
        primary_dim?: string | number | boolean | undefined;
        primary_disabled?: string | number | boolean | undefined;
        on_primary_high?: string | number | boolean | undefined;
        on_primary_medium?: string | number | boolean | undefined;
        on_primary_low?: string | number | boolean | undefined;
        secondary_default?: string | number | boolean | undefined;
        secondary_bright?: string | number | boolean | undefined;
        secondary_dim?: string | number | boolean | undefined;
        secondary_disabled?: string | number | boolean | undefined;
        on_secondary_high?: string | number | boolean | undefined;
        on_secondary_medium?: string | number | boolean | undefined;
        on_secondary_low?: string | number | boolean | undefined;
        background_default?: string | number | boolean | undefined;
        background_dim?: string | number | boolean | undefined;
        surface_default?: string | number | boolean | undefined;
        surface_bright?: string | number | boolean | undefined;
        surface_brighter?: string | number | boolean | undefined;
        surface_dim?: string | number | boolean | undefined;
        on_surface_high?: string | number | boolean | undefined;
        on_surface_medium?: string | number | boolean | undefined;
        on_surface_low?: string | number | boolean | undefined;
        border_default?: string | number | boolean | undefined;
        border_bright?: string | number | boolean | undefined;
        alert_success?: string | number | boolean | undefined;
        alert_warning?: string | number | boolean | undefined;
        alert_error_default?: string | number | boolean | undefined;
        alert_error_bright?: string | number | boolean | undefined;
        alert_error_brighter?: string | number | boolean | undefined;
        alert_error_dim?: string | number | boolean | undefined;
    } | undefined;
    shadows?: {
        sm?: string | number | boolean | undefined;
        md?: string | number | boolean | undefined;
    } | undefined;
    fonts?: {
        sans?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        h1?: string | number | boolean | undefined;
        h2?: string | number | boolean | undefined;
        h3?: string | number | boolean | undefined;
        h4?: string | number | boolean | undefined;
        h5?: string | number | boolean | undefined;
        h6?: string | number | boolean | undefined;
        tiny?: string | number | boolean | undefined;
        xs?: string | number | boolean | undefined;
        sm?: string | number | boolean | undefined;
        md?: string | number | boolean | undefined;
        lg?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {
        semiBold?: string | number | boolean | undefined;
        medium?: string | number | boolean | undefined;
        regular?: string | number | boolean | undefined;
    } | undefined;
    lineHeights?: {
        h1?: string | number | boolean | undefined;
        h2?: string | number | boolean | undefined;
        h3?: string | number | boolean | undefined;
        h4?: string | number | boolean | undefined;
        h5?: string | number | boolean | undefined;
        h6?: string | number | boolean | undefined;
        tiny?: string | number | boolean | undefined;
        xs?: string | number | boolean | undefined;
        sm?: string | number | boolean | undefined;
        md?: string | number | boolean | undefined;
    } | undefined;
    radii?: {
        0?: string | number | boolean | undefined;
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        4?: string | number | boolean | undefined;
        round?: string | number | boolean | undefined;
    } | undefined;
    space?: {
        0?: string | number | boolean | undefined;
        xs?: string | number | boolean | undefined;
        sm?: string | number | boolean | undefined;
        md?: string | number | boolean | undefined;
        lg?: string | number | boolean | undefined;
        xl?: string | number | boolean | undefined;
        px?: string | number | boolean | undefined;
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        4?: string | number | boolean | undefined;
        5?: string | number | boolean | undefined;
        6?: string | number | boolean | undefined;
        7?: string | number | boolean | undefined;
        8?: string | number | boolean | undefined;
        9?: string | number | boolean | undefined;
        10?: string | number | boolean | undefined;
        11?: string | number | boolean | undefined;
        12?: string | number | boolean | undefined;
        13?: string | number | boolean | undefined;
        14?: string | number | boolean | undefined;
        15?: string | number | boolean | undefined;
        16?: string | number | boolean | undefined;
        17?: string | number | boolean | undefined;
        18?: string | number | boolean | undefined;
        19?: string | number | boolean | undefined;
        20?: string | number | boolean | undefined;
        24?: string | number | boolean | undefined;
        28?: string | number | boolean | undefined;
        32?: string | number | boolean | undefined;
        36?: string | number | boolean | undefined;
        40?: string | number | boolean | undefined;
        44?: string | number | boolean | undefined;
        48?: string | number | boolean | undefined;
        52?: string | number | boolean | undefined;
        56?: string | number | boolean | undefined;
        60?: string | number | boolean | undefined;
        64?: string | number | boolean | undefined;
        72?: string | number | boolean | undefined;
        80?: string | number | boolean | undefined;
        96?: string | number | boolean | undefined;
        100?: string | number | boolean | undefined;
    } | undefined;
    borderWidths?: {
        light?: string | number | boolean | undefined;
        normal?: string | number | boolean | undefined;
        bold?: string | number | boolean | undefined;
        extrabold?: string | number | boolean | undefined;
        black?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
}), Argument1 extends string | ({
    colors?: {
        primary_default?: string | number | boolean | undefined;
        primary_bright?: string | number | boolean | undefined;
        primary_dim?: string | number | boolean | undefined;
        primary_disabled?: string | number | boolean | undefined;
        on_primary_high?: string | number | boolean | undefined;
        on_primary_medium?: string | number | boolean | undefined;
        on_primary_low?: string | number | boolean | undefined;
        secondary_default?: string | number | boolean | undefined;
        secondary_bright?: string | number | boolean | undefined;
        secondary_dim?: string | number | boolean | undefined;
        secondary_disabled?: string | number | boolean | undefined;
        on_secondary_high?: string | number | boolean | undefined;
        on_secondary_medium?: string | number | boolean | undefined;
        on_secondary_low?: string | number | boolean | undefined;
        background_default?: string | number | boolean | undefined;
        background_dim?: string | number | boolean | undefined;
        surface_default?: string | number | boolean | undefined;
        surface_bright?: string | number | boolean | undefined;
        surface_brighter?: string | number | boolean | undefined;
        surface_dim?: string | number | boolean | undefined;
        on_surface_high?: string | number | boolean | undefined;
        on_surface_medium?: string | number | boolean | undefined;
        on_surface_low?: string | number | boolean | undefined;
        border_default?: string | number | boolean | undefined;
        border_bright?: string | number | boolean | undefined;
        alert_success?: string | number | boolean | undefined;
        alert_warning?: string | number | boolean | undefined;
        alert_error_default?: string | number | boolean | undefined;
        alert_error_bright?: string | number | boolean | undefined;
        alert_error_brighter?: string | number | boolean | undefined;
        alert_error_dim?: string | number | boolean | undefined;
    } | undefined;
    shadows?: {
        sm?: string | number | boolean | undefined;
        md?: string | number | boolean | undefined;
    } | undefined;
    fonts?: {
        sans?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        h1?: string | number | boolean | undefined;
        h2?: string | number | boolean | undefined;
        h3?: string | number | boolean | undefined;
        h4?: string | number | boolean | undefined;
        h5?: string | number | boolean | undefined;
        h6?: string | number | boolean | undefined;
        tiny?: string | number | boolean | undefined;
        xs?: string | number | boolean | undefined;
        sm?: string | number | boolean | undefined;
        md?: string | number | boolean | undefined;
        lg?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {
        semiBold?: string | number | boolean | undefined;
        medium?: string | number | boolean | undefined;
        regular?: string | number | boolean | undefined;
    } | undefined;
    lineHeights?: {
        h1?: string | number | boolean | undefined;
        h2?: string | number | boolean | undefined;
        h3?: string | number | boolean | undefined;
        h4?: string | number | boolean | undefined;
        h5?: string | number | boolean | undefined;
        h6?: string | number | boolean | undefined;
        tiny?: string | number | boolean | undefined;
        xs?: string | number | boolean | undefined;
        sm?: string | number | boolean | undefined;
        md?: string | number | boolean | undefined;
    } | undefined;
    radii?: {
        0?: string | number | boolean | undefined;
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        4?: string | number | boolean | undefined;
        round?: string | number | boolean | undefined;
    } | undefined;
    space?: {
        0?: string | number | boolean | undefined;
        xs?: string | number | boolean | undefined;
        sm?: string | number | boolean | undefined;
        md?: string | number | boolean | undefined;
        lg?: string | number | boolean | undefined;
        xl?: string | number | boolean | undefined;
        px?: string | number | boolean | undefined;
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        4?: string | number | boolean | undefined;
        5?: string | number | boolean | undefined;
        6?: string | number | boolean | undefined;
        7?: string | number | boolean | undefined;
        8?: string | number | boolean | undefined;
        9?: string | number | boolean | undefined;
        10?: string | number | boolean | undefined;
        11?: string | number | boolean | undefined;
        12?: string | number | boolean | undefined;
        13?: string | number | boolean | undefined;
        14?: string | number | boolean | undefined;
        15?: string | number | boolean | undefined;
        16?: string | number | boolean | undefined;
        17?: string | number | boolean | undefined;
        18?: string | number | boolean | undefined;
        19?: string | number | boolean | undefined;
        20?: string | number | boolean | undefined;
        24?: string | number | boolean | undefined;
        28?: string | number | boolean | undefined;
        32?: string | number | boolean | undefined;
        36?: string | number | boolean | undefined;
        40?: string | number | boolean | undefined;
        44?: string | number | boolean | undefined;
        48?: string | number | boolean | undefined;
        52?: string | number | boolean | undefined;
        56?: string | number | boolean | undefined;
        60?: string | number | boolean | undefined;
        64?: string | number | boolean | undefined;
        72?: string | number | boolean | undefined;
        80?: string | number | boolean | undefined;
        96?: string | number | boolean | undefined;
        100?: string | number | boolean | undefined;
    } | undefined;
    borderWidths?: {
        light?: string | number | boolean | undefined;
        normal?: string | number | boolean | undefined;
        bold?: string | number | boolean | undefined;
        extrabold?: string | number | boolean | undefined;
        black?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
})>(nameOrScalesArg0: Argument0, nameOrScalesArg1?: Argument1 | undefined) => string & {
    className: string;
    selector: string;
} & (Argument0 extends string ? import("@stitches/react/types/stitches").ThemeTokens<Argument1, "hms-ui"> : import("@stitches/react/types/stitches").ThemeTokens<Argument0, "hms-ui">), styled: <Type extends import("@stitches/react/types/util").Function | import("react").ComponentType<any> | keyof JSX.IntrinsicElements, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS_1 = import("@stitches/react/types/css-util").CSS<{
    allowMotion: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    ls: string;
}, {
    colors: {
        primary_default: string;
        primary_bright: string;
        primary_dim: string;
        primary_disabled: string;
        on_primary_high: string;
        on_primary_medium: string;
        on_primary_low: string;
        secondary_default: string;
        secondary_bright: string;
        secondary_dim: string;
        secondary_disabled: string;
        on_secondary_high: string;
        on_secondary_medium: string;
        on_secondary_low: string;
        background_default: string;
        background_dim: string;
        surface_default: string;
        surface_bright: string;
        surface_brighter: string;
        surface_dim: string;
        on_surface_high: string;
        on_surface_medium: string;
        on_surface_low: string;
        border_default: string;
        border_bright: string;
        alert_success: string;
        alert_warning: string;
        alert_error_default: string;
        alert_error_bright: string;
        alert_error_brighter: string;
        alert_error_dim: string;
    };
    shadows: {
        sm: string;
        md: string;
    };
    fonts: {
        sans: string;
    };
    fontSizes: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        tiny: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    fontWeights: {
        semiBold: number;
        medium: number;
        regular: number;
    };
    lineHeights: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        tiny: string;
        xs: string;
        sm: string;
        md: string;
    };
    radii: {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        round: string;
    };
    space: {
        0: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        px: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        100: string;
    };
    borderWidths: {
        light: string;
        normal: string;
        bold: string;
        extrabold: string;
        black: string;
    };
}, {
    width: string;
    height: string;
    minWidth: string;
    maxWidth: string;
    minHeight: string;
    maxHeight: string;
    flexBasis: string;
    gridTemplateColumns: string;
    gridTemplateRows: string;
    blockSize: string;
    minBlockSize: string;
    maxBlockSize: string;
    inlineSize: string;
    minInlineSize: string;
    maxInlineSize: string;
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    bg: (value: {
        readonly [Stitches.$$PropertyValue]: "backgroundColor";
    }) => {
        backgroundColor: {
            readonly [Stitches.$$PropertyValue]: "backgroundColor";
        };
    };
    c: (value: {
        readonly [Stitches.$$PropertyValue]: "color";
    }) => {
        color: {
            readonly [Stitches.$$PropertyValue]: "color";
        };
    };
    r: (value: {
        readonly [Stitches.$$ScaleValue]: "radii";
    }) => {
        borderRadius: {
            readonly [Stitches.$$ScaleValue]: "radii";
        };
    };
    fs: (value: string | number | {
        readonly [Stitches.$$PropertyValue]: "fontSize";
    }) => {
        fontSize: string | number | {
            readonly [Stitches.$$PropertyValue]: "fontSize";
        };
    };
    size: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        height: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        width: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    w: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        width: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    h: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        height: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    p: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        padding: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pt: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pr: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pb: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pl: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    px: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        paddingRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    py: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        paddingBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    m: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        margin: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mt: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mr: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mb: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    ml: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mx: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        marginRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    my: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        marginBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS_1> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS_1;
            [x: number]: CSS_1;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS_1;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS_1 & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS_1 ? CSS_1[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
    allowMotion: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    ls: string;
}, import("@stitches/react/types/css-util").CSS<{
    allowMotion: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    ls: string;
}, {
    colors: {
        primary_default: string;
        primary_bright: string;
        primary_dim: string;
        primary_disabled: string;
        on_primary_high: string;
        on_primary_medium: string;
        on_primary_low: string;
        secondary_default: string;
        secondary_bright: string;
        secondary_dim: string;
        secondary_disabled: string;
        on_secondary_high: string;
        on_secondary_medium: string;
        on_secondary_low: string;
        background_default: string;
        background_dim: string;
        surface_default: string;
        surface_bright: string;
        surface_brighter: string;
        surface_dim: string;
        on_surface_high: string;
        on_surface_medium: string;
        on_surface_low: string;
        border_default: string;
        border_bright: string;
        alert_success: string;
        alert_warning: string;
        alert_error_default: string;
        alert_error_bright: string;
        alert_error_brighter: string;
        alert_error_dim: string;
    };
    shadows: {
        sm: string;
        md: string;
    };
    fonts: {
        sans: string;
    };
    fontSizes: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        tiny: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    fontWeights: {
        semiBold: number;
        medium: number;
        regular: number;
    };
    lineHeights: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        tiny: string;
        xs: string;
        sm: string;
        md: string;
    };
    radii: {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        round: string;
    };
    space: {
        0: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        px: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        100: string;
    };
    borderWidths: {
        light: string;
        normal: string;
        bold: string;
        extrabold: string;
        black: string;
    };
}, {
    width: string;
    height: string;
    minWidth: string;
    maxWidth: string;
    minHeight: string;
    maxHeight: string;
    flexBasis: string;
    gridTemplateColumns: string;
    gridTemplateRows: string;
    blockSize: string;
    minBlockSize: string;
    maxBlockSize: string;
    inlineSize: string;
    minInlineSize: string;
    maxInlineSize: string;
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    bg: (value: {
        readonly [Stitches.$$PropertyValue]: "backgroundColor";
    }) => {
        backgroundColor: {
            readonly [Stitches.$$PropertyValue]: "backgroundColor";
        };
    };
    c: (value: {
        readonly [Stitches.$$PropertyValue]: "color";
    }) => {
        color: {
            readonly [Stitches.$$PropertyValue]: "color";
        };
    };
    r: (value: {
        readonly [Stitches.$$ScaleValue]: "radii";
    }) => {
        borderRadius: {
            readonly [Stitches.$$ScaleValue]: "radii";
        };
    };
    fs: (value: string | number | {
        readonly [Stitches.$$PropertyValue]: "fontSize";
    }) => {
        fontSize: string | number | {
            readonly [Stitches.$$PropertyValue]: "fontSize";
        };
    };
    size: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        height: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        width: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    w: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        width: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    h: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        height: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    p: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        padding: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pt: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pr: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pb: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pl: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    px: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        paddingRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    py: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        paddingBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    m: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        margin: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mt: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mr: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mb: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    ml: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mx: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        marginRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    my: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        marginBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
}>>, globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? import("@stitches/react/types/css").AtRule.FontFace | import("@stitches/react/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/react/types/css-util").CSS<{
        allowMotion: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        ls: string;
    }, {
        colors: {
            primary_default: string;
            primary_bright: string;
            primary_dim: string;
            primary_disabled: string;
            on_primary_high: string;
            on_primary_medium: string;
            on_primary_low: string;
            secondary_default: string;
            secondary_bright: string;
            secondary_dim: string;
            secondary_disabled: string;
            on_secondary_high: string;
            on_secondary_medium: string;
            on_secondary_low: string;
            background_default: string;
            background_dim: string;
            surface_default: string;
            surface_bright: string;
            surface_brighter: string;
            surface_dim: string;
            on_surface_high: string;
            on_surface_medium: string;
            on_surface_low: string;
            border_default: string;
            border_bright: string;
            alert_success: string;
            alert_warning: string;
            alert_error_default: string;
            alert_error_bright: string;
            alert_error_brighter: string;
            alert_error_dim: string;
        };
        shadows: {
            sm: string;
            md: string;
        };
        fonts: {
            sans: string;
        };
        fontSizes: {
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
            tiny: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
        };
        fontWeights: {
            semiBold: number;
            medium: number;
            regular: number;
        };
        lineHeights: {
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
            tiny: string;
            xs: string;
            sm: string;
            md: string;
        };
        radii: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            round: string;
        };
        space: {
            0: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            px: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            10: string;
            11: string;
            12: string;
            13: string;
            14: string;
            15: string;
            16: string;
            17: string;
            18: string;
            19: string;
            20: string;
            24: string;
            28: string;
            32: string;
            36: string;
            40: string;
            44: string;
            48: string;
            52: string;
            56: string;
            60: string;
            64: string;
            72: string;
            80: string;
            96: string;
            100: string;
        };
        borderWidths: {
            light: string;
            normal: string;
            bold: string;
            extrabold: string;
            black: string;
        };
    }, {
        width: string;
        height: string;
        minWidth: string;
        maxWidth: string;
        minHeight: string;
        maxHeight: string;
        flexBasis: string;
        gridTemplateColumns: string;
        gridTemplateRows: string;
        blockSize: string;
        minBlockSize: string;
        maxBlockSize: string;
        inlineSize: string;
        minInlineSize: string;
        maxInlineSize: string;
        gap: "space";
        gridGap: "space";
        columnGap: "space";
        gridColumnGap: "space";
        rowGap: "space";
        gridRowGap: "space";
        inset: "space";
        insetBlock: "space";
        insetBlockEnd: "space";
        insetBlockStart: "space";
        insetInline: "space";
        insetInlineEnd: "space";
        insetInlineStart: "space";
        margin: "space";
        marginTop: "space";
        marginRight: "space";
        marginBottom: "space";
        marginLeft: "space";
        marginBlock: "space";
        marginBlockEnd: "space";
        marginBlockStart: "space";
        marginInline: "space";
        marginInlineEnd: "space";
        marginInlineStart: "space";
        padding: "space";
        paddingTop: "space";
        paddingRight: "space";
        paddingBottom: "space";
        paddingLeft: "space";
        paddingBlock: "space";
        paddingBlockEnd: "space";
        paddingBlockStart: "space";
        paddingInline: "space";
        paddingInlineEnd: "space";
        paddingInlineStart: "space";
        scrollMargin: "space";
        scrollMarginTop: "space";
        scrollMarginRight: "space";
        scrollMarginBottom: "space";
        scrollMarginLeft: "space";
        scrollMarginBlock: "space";
        scrollMarginBlockEnd: "space";
        scrollMarginBlockStart: "space";
        scrollMarginInline: "space";
        scrollMarginInlineEnd: "space";
        scrollMarginInlineStart: "space";
        scrollPadding: "space";
        scrollPaddingTop: "space";
        scrollPaddingRight: "space";
        scrollPaddingBottom: "space";
        scrollPaddingLeft: "space";
        scrollPaddingBlock: "space";
        scrollPaddingBlockEnd: "space";
        scrollPaddingBlockStart: "space";
        scrollPaddingInline: "space";
        scrollPaddingInlineEnd: "space";
        scrollPaddingInlineStart: "space";
        top: "space";
        right: "space";
        bottom: "space";
        left: "space";
        fontSize: "fontSizes";
        background: "colors";
        backgroundColor: "colors";
        backgroundImage: "colors";
        borderImage: "colors";
        border: "colors";
        borderBlock: "colors";
        borderBlockEnd: "colors";
        borderBlockStart: "colors";
        borderBottom: "colors";
        borderBottomColor: "colors";
        borderColor: "colors";
        borderInline: "colors";
        borderInlineEnd: "colors";
        borderInlineStart: "colors";
        borderLeft: "colors";
        borderLeftColor: "colors";
        borderRight: "colors";
        borderRightColor: "colors";
        borderTop: "colors";
        borderTopColor: "colors";
        caretColor: "colors";
        color: "colors";
        columnRuleColor: "colors";
        outline: "colors";
        outlineColor: "colors";
        fill: "colors";
        stroke: "colors";
        textDecorationColor: "colors";
        fontFamily: "fonts";
        fontWeight: "fontWeights";
        lineHeight: "lineHeights";
        letterSpacing: "letterSpacings";
        borderWidth: "borderWidths";
        borderTopWidth: "borderWidths";
        borderLeftWidth: "borderWidths";
        borderRightWidth: "borderWidths";
        borderBottomWidth: "borderWidths";
        borderStyle: "borderStyles";
        borderTopStyle: "borderStyles";
        borderLeftStyle: "borderStyles";
        borderRightStyle: "borderStyles";
        borderBottomStyle: "borderStyles";
        borderRadius: "radii";
        borderTopLeftRadius: "radii";
        borderTopRightRadius: "radii";
        borderBottomRightRadius: "radii";
        borderBottomLeftRadius: "radii";
        boxShadow: "shadows";
        textShadow: "shadows";
        transition: "transitions";
        zIndex: "zIndices";
    }, {
        bg: (value: {
            readonly [Stitches.$$PropertyValue]: "backgroundColor";
        }) => {
            backgroundColor: {
                readonly [Stitches.$$PropertyValue]: "backgroundColor";
            };
        };
        c: (value: {
            readonly [Stitches.$$PropertyValue]: "color";
        }) => {
            color: {
                readonly [Stitches.$$PropertyValue]: "color";
            };
        };
        r: (value: {
            readonly [Stitches.$$ScaleValue]: "radii";
        }) => {
            borderRadius: {
                readonly [Stitches.$$ScaleValue]: "radii";
            };
        };
        fs: (value: string | number | {
            readonly [Stitches.$$PropertyValue]: "fontSize";
        }) => {
            fontSize: string | number | {
                readonly [Stitches.$$PropertyValue]: "fontSize";
            };
        };
        size: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            height: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
            width: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        w: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            width: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        h: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            height: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        p: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            padding: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        pt: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            paddingTop: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        pr: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            paddingRight: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        pb: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            paddingBottom: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        pl: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            paddingLeft: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        px: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            paddingLeft: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
            paddingRight: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        py: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            paddingTop: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
            paddingBottom: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        m: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            margin: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        mt: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            marginTop: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        mr: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            marginRight: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        mb: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            marginBottom: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        ml: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            marginLeft: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        mx: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            marginLeft: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
            marginRight: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        my: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            marginTop: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
            marginBottom: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
    }>;
} : K extends `@property ${string}` ? import("@stitches/react/types/css").AtRule.Property : import("@stitches/react/types/css-util").CSS<{
    allowMotion: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    ls: string;
}, {
    colors: {
        primary_default: string;
        primary_bright: string;
        primary_dim: string;
        primary_disabled: string;
        on_primary_high: string;
        on_primary_medium: string;
        on_primary_low: string;
        secondary_default: string;
        secondary_bright: string;
        secondary_dim: string;
        secondary_disabled: string;
        on_secondary_high: string;
        on_secondary_medium: string;
        on_secondary_low: string;
        background_default: string;
        background_dim: string;
        surface_default: string;
        surface_bright: string;
        surface_brighter: string;
        surface_dim: string;
        on_surface_high: string;
        on_surface_medium: string;
        on_surface_low: string;
        border_default: string;
        border_bright: string;
        alert_success: string;
        alert_warning: string;
        alert_error_default: string;
        alert_error_bright: string;
        alert_error_brighter: string;
        alert_error_dim: string;
    };
    shadows: {
        sm: string;
        md: string;
    };
    fonts: {
        sans: string;
    };
    fontSizes: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        tiny: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    fontWeights: {
        semiBold: number;
        medium: number;
        regular: number;
    };
    lineHeights: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        tiny: string;
        xs: string;
        sm: string;
        md: string;
    };
    radii: {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        round: string;
    };
    space: {
        0: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        px: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        100: string;
    };
    borderWidths: {
        light: string;
        normal: string;
        bold: string;
        extrabold: string;
        black: string;
    };
}, {
    width: string;
    height: string;
    minWidth: string;
    maxWidth: string;
    minHeight: string;
    maxHeight: string;
    flexBasis: string;
    gridTemplateColumns: string;
    gridTemplateRows: string;
    blockSize: string;
    minBlockSize: string;
    maxBlockSize: string;
    inlineSize: string;
    minInlineSize: string;
    maxInlineSize: string;
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    bg: (value: {
        readonly [Stitches.$$PropertyValue]: "backgroundColor";
    }) => {
        backgroundColor: {
            readonly [Stitches.$$PropertyValue]: "backgroundColor";
        };
    };
    c: (value: {
        readonly [Stitches.$$PropertyValue]: "color";
    }) => {
        color: {
            readonly [Stitches.$$PropertyValue]: "color";
        };
    };
    r: (value: {
        readonly [Stitches.$$ScaleValue]: "radii";
    }) => {
        borderRadius: {
            readonly [Stitches.$$ScaleValue]: "radii";
        };
    };
    fs: (value: string | number | {
        readonly [Stitches.$$PropertyValue]: "fontSize";
    }) => {
        fontSize: string | number | {
            readonly [Stitches.$$PropertyValue]: "fontSize";
        };
    };
    size: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        height: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        width: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    w: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        width: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    h: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        height: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    p: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        padding: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pt: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pr: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pb: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pl: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    px: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        paddingRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    py: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        paddingBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    m: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        margin: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mt: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mr: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mb: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    ml: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mx: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        marginRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    my: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        marginBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
}>; })[]) => () => string, keyframes: (style: {
    [offset: string]: import("@stitches/react/types/css-util").CSS<{
        allowMotion: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        ls: string;
    }, {
        colors: {
            primary_default: string;
            primary_bright: string;
            primary_dim: string;
            primary_disabled: string;
            on_primary_high: string;
            on_primary_medium: string;
            on_primary_low: string;
            secondary_default: string;
            secondary_bright: string;
            secondary_dim: string;
            secondary_disabled: string;
            on_secondary_high: string;
            on_secondary_medium: string;
            on_secondary_low: string;
            background_default: string;
            background_dim: string;
            surface_default: string;
            surface_bright: string;
            surface_brighter: string;
            surface_dim: string;
            on_surface_high: string;
            on_surface_medium: string;
            on_surface_low: string;
            border_default: string;
            border_bright: string;
            alert_success: string;
            alert_warning: string;
            alert_error_default: string;
            alert_error_bright: string;
            alert_error_brighter: string;
            alert_error_dim: string;
        };
        shadows: {
            sm: string;
            md: string;
        };
        fonts: {
            sans: string;
        };
        fontSizes: {
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
            tiny: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
        };
        fontWeights: {
            semiBold: number;
            medium: number;
            regular: number;
        };
        lineHeights: {
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
            tiny: string;
            xs: string;
            sm: string;
            md: string;
        };
        radii: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            round: string;
        };
        space: {
            0: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            px: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            10: string;
            11: string;
            12: string;
            13: string;
            14: string;
            15: string;
            16: string;
            17: string;
            18: string;
            19: string;
            20: string;
            24: string;
            28: string;
            32: string;
            36: string;
            40: string;
            44: string;
            48: string;
            52: string;
            56: string;
            60: string;
            64: string;
            72: string;
            80: string;
            96: string;
            100: string;
        };
        borderWidths: {
            light: string;
            normal: string;
            bold: string;
            extrabold: string;
            black: string;
        };
    }, {
        width: string;
        height: string;
        minWidth: string;
        maxWidth: string;
        minHeight: string;
        maxHeight: string;
        flexBasis: string;
        gridTemplateColumns: string;
        gridTemplateRows: string;
        blockSize: string;
        minBlockSize: string;
        maxBlockSize: string;
        inlineSize: string;
        minInlineSize: string;
        maxInlineSize: string;
        gap: "space";
        gridGap: "space";
        columnGap: "space";
        gridColumnGap: "space";
        rowGap: "space";
        gridRowGap: "space";
        inset: "space";
        insetBlock: "space";
        insetBlockEnd: "space";
        insetBlockStart: "space";
        insetInline: "space";
        insetInlineEnd: "space";
        insetInlineStart: "space";
        margin: "space";
        marginTop: "space";
        marginRight: "space";
        marginBottom: "space";
        marginLeft: "space";
        marginBlock: "space";
        marginBlockEnd: "space";
        marginBlockStart: "space";
        marginInline: "space";
        marginInlineEnd: "space";
        marginInlineStart: "space";
        padding: "space";
        paddingTop: "space";
        paddingRight: "space";
        paddingBottom: "space";
        paddingLeft: "space";
        paddingBlock: "space";
        paddingBlockEnd: "space";
        paddingBlockStart: "space";
        paddingInline: "space";
        paddingInlineEnd: "space";
        paddingInlineStart: "space";
        scrollMargin: "space";
        scrollMarginTop: "space";
        scrollMarginRight: "space";
        scrollMarginBottom: "space";
        scrollMarginLeft: "space";
        scrollMarginBlock: "space";
        scrollMarginBlockEnd: "space";
        scrollMarginBlockStart: "space";
        scrollMarginInline: "space";
        scrollMarginInlineEnd: "space";
        scrollMarginInlineStart: "space";
        scrollPadding: "space";
        scrollPaddingTop: "space";
        scrollPaddingRight: "space";
        scrollPaddingBottom: "space";
        scrollPaddingLeft: "space";
        scrollPaddingBlock: "space";
        scrollPaddingBlockEnd: "space";
        scrollPaddingBlockStart: "space";
        scrollPaddingInline: "space";
        scrollPaddingInlineEnd: "space";
        scrollPaddingInlineStart: "space";
        top: "space";
        right: "space";
        bottom: "space";
        left: "space";
        fontSize: "fontSizes";
        background: "colors";
        backgroundColor: "colors";
        backgroundImage: "colors";
        borderImage: "colors";
        border: "colors";
        borderBlock: "colors";
        borderBlockEnd: "colors";
        borderBlockStart: "colors";
        borderBottom: "colors";
        borderBottomColor: "colors";
        borderColor: "colors";
        borderInline: "colors";
        borderInlineEnd: "colors";
        borderInlineStart: "colors";
        borderLeft: "colors";
        borderLeftColor: "colors";
        borderRight: "colors";
        borderRightColor: "colors";
        borderTop: "colors";
        borderTopColor: "colors";
        caretColor: "colors";
        color: "colors";
        columnRuleColor: "colors";
        outline: "colors";
        outlineColor: "colors";
        fill: "colors";
        stroke: "colors";
        textDecorationColor: "colors";
        fontFamily: "fonts";
        fontWeight: "fontWeights";
        lineHeight: "lineHeights";
        letterSpacing: "letterSpacings";
        borderWidth: "borderWidths";
        borderTopWidth: "borderWidths";
        borderLeftWidth: "borderWidths";
        borderRightWidth: "borderWidths";
        borderBottomWidth: "borderWidths";
        borderStyle: "borderStyles";
        borderTopStyle: "borderStyles";
        borderLeftStyle: "borderStyles";
        borderRightStyle: "borderStyles";
        borderBottomStyle: "borderStyles";
        borderRadius: "radii";
        borderTopLeftRadius: "radii";
        borderTopRightRadius: "radii";
        borderBottomRightRadius: "radii";
        borderBottomLeftRadius: "radii";
        boxShadow: "shadows";
        textShadow: "shadows";
        transition: "transitions";
        zIndex: "zIndices";
    }, {
        bg: (value: {
            readonly [Stitches.$$PropertyValue]: "backgroundColor";
        }) => {
            backgroundColor: {
                readonly [Stitches.$$PropertyValue]: "backgroundColor";
            };
        };
        c: (value: {
            readonly [Stitches.$$PropertyValue]: "color";
        }) => {
            color: {
                readonly [Stitches.$$PropertyValue]: "color";
            };
        };
        r: (value: {
            readonly [Stitches.$$ScaleValue]: "radii";
        }) => {
            borderRadius: {
                readonly [Stitches.$$ScaleValue]: "radii";
            };
        };
        fs: (value: string | number | {
            readonly [Stitches.$$PropertyValue]: "fontSize";
        }) => {
            fontSize: string | number | {
                readonly [Stitches.$$PropertyValue]: "fontSize";
            };
        };
        size: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            height: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
            width: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        w: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            width: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        h: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            height: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        p: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            padding: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        pt: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            paddingTop: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        pr: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            paddingRight: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        pb: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            paddingBottom: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        pl: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            paddingLeft: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        px: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            paddingLeft: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
            paddingRight: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        py: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            paddingTop: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
            paddingBottom: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        m: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            margin: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        mt: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            marginTop: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        mr: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            marginRight: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        mb: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            marginBottom: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        ml: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            marginLeft: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        mx: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            marginLeft: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
            marginRight: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        my: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            marginTop: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
            marginBottom: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
    }>;
}) => {
    (): string;
    name: string;
}, css: <Composers extends (string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> | {
    [name: string]: unknown;
})[], CSS_1 = import("@stitches/react/types/css-util").CSS<{
    allowMotion: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    ls: string;
}, {
    colors: {
        primary_default: string;
        primary_bright: string;
        primary_dim: string;
        primary_disabled: string;
        on_primary_high: string;
        on_primary_medium: string;
        on_primary_low: string;
        secondary_default: string;
        secondary_bright: string;
        secondary_dim: string;
        secondary_disabled: string;
        on_secondary_high: string;
        on_secondary_medium: string;
        on_secondary_low: string;
        background_default: string;
        background_dim: string;
        surface_default: string;
        surface_bright: string;
        surface_brighter: string;
        surface_dim: string;
        on_surface_high: string;
        on_surface_medium: string;
        on_surface_low: string;
        border_default: string;
        border_bright: string;
        alert_success: string;
        alert_warning: string;
        alert_error_default: string;
        alert_error_bright: string;
        alert_error_brighter: string;
        alert_error_dim: string;
    };
    shadows: {
        sm: string;
        md: string;
    };
    fonts: {
        sans: string;
    };
    fontSizes: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        tiny: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    fontWeights: {
        semiBold: number;
        medium: number;
        regular: number;
    };
    lineHeights: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        tiny: string;
        xs: string;
        sm: string;
        md: string;
    };
    radii: {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        round: string;
    };
    space: {
        0: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        px: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        100: string;
    };
    borderWidths: {
        light: string;
        normal: string;
        bold: string;
        extrabold: string;
        black: string;
    };
}, {
    width: string;
    height: string;
    minWidth: string;
    maxWidth: string;
    minHeight: string;
    maxHeight: string;
    flexBasis: string;
    gridTemplateColumns: string;
    gridTemplateRows: string;
    blockSize: string;
    minBlockSize: string;
    maxBlockSize: string;
    inlineSize: string;
    minInlineSize: string;
    maxInlineSize: string;
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
}, {
    bg: (value: {
        readonly [Stitches.$$PropertyValue]: "backgroundColor";
    }) => {
        backgroundColor: {
            readonly [Stitches.$$PropertyValue]: "backgroundColor";
        };
    };
    c: (value: {
        readonly [Stitches.$$PropertyValue]: "color";
    }) => {
        color: {
            readonly [Stitches.$$PropertyValue]: "color";
        };
    };
    r: (value: {
        readonly [Stitches.$$ScaleValue]: "radii";
    }) => {
        borderRadius: {
            readonly [Stitches.$$ScaleValue]: "radii";
        };
    };
    fs: (value: string | number | {
        readonly [Stitches.$$PropertyValue]: "fontSize";
    }) => {
        fontSize: string | number | {
            readonly [Stitches.$$PropertyValue]: "fontSize";
        };
    };
    size: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        height: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        width: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    w: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        width: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    h: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        height: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    p: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        padding: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pt: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pr: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pb: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pl: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    px: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        paddingRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    py: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        paddingTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        paddingBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    m: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        margin: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mt: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mr: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mb: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    ml: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mx: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        marginRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    my: (value: string | number | {
        readonly [Stitches.$$ScaleValue]: "space";
    }) => {
        marginTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        marginBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS_1> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS_1;
            [x: number]: CSS_1;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS_1;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS_1 & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS_1 ? CSS_1[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").CssComponent<import("@stitches/react/types/styled-component").StyledComponentType<Composers>, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
    allowMotion: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    ls: string;
}, CSS_1>, getCssText: () => string, config: {
    prefix: "hms-ui";
    media: {
        allowMotion: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        ls: string;
    };
    theme: {
        colors: {
            primary_default: string;
            primary_bright: string;
            primary_dim: string;
            primary_disabled: string;
            on_primary_high: string;
            on_primary_medium: string;
            on_primary_low: string;
            secondary_default: string;
            secondary_bright: string;
            secondary_dim: string;
            secondary_disabled: string;
            on_secondary_high: string;
            on_secondary_medium: string;
            on_secondary_low: string;
            background_default: string;
            background_dim: string;
            surface_default: string;
            surface_bright: string;
            surface_brighter: string;
            surface_dim: string;
            on_surface_high: string;
            on_surface_medium: string;
            on_surface_low: string;
            border_default: string;
            border_bright: string;
            alert_success: string;
            alert_warning: string;
            alert_error_default: string;
            alert_error_bright: string;
            alert_error_brighter: string;
            alert_error_dim: string;
        };
        shadows: {
            sm: string;
            md: string;
        };
        fonts: {
            sans: string;
        };
        fontSizes: {
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
            tiny: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
        };
        fontWeights: {
            semiBold: number;
            medium: number;
            regular: number;
        };
        lineHeights: {
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
            tiny: string;
            xs: string;
            sm: string;
            md: string;
        };
        radii: {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            round: string;
        };
        space: {
            0: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            px: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            10: string;
            11: string;
            12: string;
            13: string;
            14: string;
            15: string;
            16: string;
            17: string;
            18: string;
            19: string;
            20: string;
            24: string;
            28: string;
            32: string;
            36: string;
            40: string;
            44: string;
            48: string;
            52: string;
            56: string;
            60: string;
            64: string;
            72: string;
            80: string;
            96: string;
            100: string;
        };
        borderWidths: {
            light: string;
            normal: string;
            bold: string;
            extrabold: string;
            black: string;
        };
    };
    themeMap: {
        width: string;
        height: string;
        minWidth: string;
        maxWidth: string;
        minHeight: string;
        maxHeight: string;
        flexBasis: string;
        gridTemplateColumns: string;
        gridTemplateRows: string;
        blockSize: string;
        minBlockSize: string;
        maxBlockSize: string;
        inlineSize: string;
        minInlineSize: string;
        maxInlineSize: string;
        gap: "space";
        gridGap: "space";
        columnGap: "space";
        gridColumnGap: "space";
        rowGap: "space";
        gridRowGap: "space";
        inset: "space";
        insetBlock: "space";
        insetBlockEnd: "space";
        insetBlockStart: "space";
        insetInline: "space";
        insetInlineEnd: "space";
        insetInlineStart: "space";
        margin: "space";
        marginTop: "space";
        marginRight: "space";
        marginBottom: "space";
        marginLeft: "space";
        marginBlock: "space";
        marginBlockEnd: "space";
        marginBlockStart: "space";
        marginInline: "space";
        marginInlineEnd: "space";
        marginInlineStart: "space";
        padding: "space";
        paddingTop: "space";
        paddingRight: "space";
        paddingBottom: "space";
        paddingLeft: "space";
        paddingBlock: "space";
        paddingBlockEnd: "space";
        paddingBlockStart: "space";
        paddingInline: "space";
        paddingInlineEnd: "space";
        paddingInlineStart: "space";
        scrollMargin: "space";
        scrollMarginTop: "space";
        scrollMarginRight: "space";
        scrollMarginBottom: "space";
        scrollMarginLeft: "space";
        scrollMarginBlock: "space";
        scrollMarginBlockEnd: "space";
        scrollMarginBlockStart: "space";
        scrollMarginInline: "space";
        scrollMarginInlineEnd: "space";
        scrollMarginInlineStart: "space";
        scrollPadding: "space";
        scrollPaddingTop: "space";
        scrollPaddingRight: "space";
        scrollPaddingBottom: "space";
        scrollPaddingLeft: "space";
        scrollPaddingBlock: "space";
        scrollPaddingBlockEnd: "space";
        scrollPaddingBlockStart: "space";
        scrollPaddingInline: "space";
        scrollPaddingInlineEnd: "space";
        scrollPaddingInlineStart: "space";
        top: "space";
        right: "space";
        bottom: "space";
        left: "space";
        fontSize: "fontSizes";
        background: "colors";
        backgroundColor: "colors";
        backgroundImage: "colors";
        borderImage: "colors";
        border: "colors";
        borderBlock: "colors";
        borderBlockEnd: "colors";
        borderBlockStart: "colors";
        borderBottom: "colors";
        borderBottomColor: "colors";
        borderColor: "colors";
        borderInline: "colors";
        borderInlineEnd: "colors";
        borderInlineStart: "colors";
        borderLeft: "colors";
        borderLeftColor: "colors";
        borderRight: "colors";
        borderRightColor: "colors";
        borderTop: "colors";
        borderTopColor: "colors";
        caretColor: "colors";
        color: "colors";
        columnRuleColor: "colors";
        outline: "colors";
        outlineColor: "colors";
        fill: "colors";
        stroke: "colors";
        textDecorationColor: "colors";
        fontFamily: "fonts";
        fontWeight: "fontWeights";
        lineHeight: "lineHeights";
        letterSpacing: "letterSpacings";
        borderWidth: "borderWidths";
        borderTopWidth: "borderWidths";
        borderLeftWidth: "borderWidths";
        borderRightWidth: "borderWidths";
        borderBottomWidth: "borderWidths";
        borderStyle: "borderStyles";
        borderTopStyle: "borderStyles";
        borderLeftStyle: "borderStyles";
        borderRightStyle: "borderStyles";
        borderBottomStyle: "borderStyles";
        borderRadius: "radii";
        borderTopLeftRadius: "radii";
        borderTopRightRadius: "radii";
        borderBottomRightRadius: "radii";
        borderBottomLeftRadius: "radii";
        boxShadow: "shadows";
        textShadow: "shadows";
        transition: "transitions";
        zIndex: "zIndices";
    };
    utils: {
        bg: (value: {
            readonly [Stitches.$$PropertyValue]: "backgroundColor";
        }) => {
            backgroundColor: {
                readonly [Stitches.$$PropertyValue]: "backgroundColor";
            };
        };
        c: (value: {
            readonly [Stitches.$$PropertyValue]: "color";
        }) => {
            color: {
                readonly [Stitches.$$PropertyValue]: "color";
            };
        };
        r: (value: {
            readonly [Stitches.$$ScaleValue]: "radii";
        }) => {
            borderRadius: {
                readonly [Stitches.$$ScaleValue]: "radii";
            };
        };
        fs: (value: string | number | {
            readonly [Stitches.$$PropertyValue]: "fontSize";
        }) => {
            fontSize: string | number | {
                readonly [Stitches.$$PropertyValue]: "fontSize";
            };
        };
        size: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            height: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
            width: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        w: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            width: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        h: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            height: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        p: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            padding: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        pt: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            paddingTop: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        pr: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            paddingRight: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        pb: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            paddingBottom: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        pl: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            paddingLeft: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        px: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            paddingLeft: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
            paddingRight: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        py: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            paddingTop: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
            paddingBottom: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        m: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            margin: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        mt: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            marginTop: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        mr: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            marginRight: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        mb: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            marginBottom: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        ml: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            marginLeft: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        mx: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            marginLeft: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
            marginRight: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
        my: (value: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        }) => {
            marginTop: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
            marginBottom: string | number | {
                readonly [Stitches.$$ScaleValue]: "space";
            };
        };
    };
};
export declare const globalStyles: () => string;
export declare type ThemeType = 'default';
export declare type Theme = typeof HmsStitches.theme;
/**
 * This method will be used to create custom themes or update any theme values
 * @param { type: ThemeType; className: string; theme: Theme }
 * @returns
 */
export declare const createTheme: ({ themeType, theme, className, }: {
    themeType: string;
    className?: string | undefined;
    theme?: Partial<string & {
        className: string;
        selector: string;
    } & {
        colors: {
            primary_default: import("@stitches/react/types/theme").Token<"primary_default", string, "colors", "hms-ui">;
            primary_bright: import("@stitches/react/types/theme").Token<"primary_bright", string, "colors", "hms-ui">;
            primary_dim: import("@stitches/react/types/theme").Token<"primary_dim", string, "colors", "hms-ui">;
            primary_disabled: import("@stitches/react/types/theme").Token<"primary_disabled", string, "colors", "hms-ui">;
            on_primary_high: import("@stitches/react/types/theme").Token<"on_primary_high", string, "colors", "hms-ui">;
            on_primary_medium: import("@stitches/react/types/theme").Token<"on_primary_medium", string, "colors", "hms-ui">;
            on_primary_low: import("@stitches/react/types/theme").Token<"on_primary_low", string, "colors", "hms-ui">;
            secondary_default: import("@stitches/react/types/theme").Token<"secondary_default", string, "colors", "hms-ui">;
            secondary_bright: import("@stitches/react/types/theme").Token<"secondary_bright", string, "colors", "hms-ui">;
            secondary_dim: import("@stitches/react/types/theme").Token<"secondary_dim", string, "colors", "hms-ui">;
            secondary_disabled: import("@stitches/react/types/theme").Token<"secondary_disabled", string, "colors", "hms-ui">;
            on_secondary_high: import("@stitches/react/types/theme").Token<"on_secondary_high", string, "colors", "hms-ui">;
            on_secondary_medium: import("@stitches/react/types/theme").Token<"on_secondary_medium", string, "colors", "hms-ui">;
            on_secondary_low: import("@stitches/react/types/theme").Token<"on_secondary_low", string, "colors", "hms-ui">;
            background_default: import("@stitches/react/types/theme").Token<"background_default", string, "colors", "hms-ui">;
            background_dim: import("@stitches/react/types/theme").Token<"background_dim", string, "colors", "hms-ui">;
            surface_default: import("@stitches/react/types/theme").Token<"surface_default", string, "colors", "hms-ui">;
            surface_bright: import("@stitches/react/types/theme").Token<"surface_bright", string, "colors", "hms-ui">;
            surface_brighter: import("@stitches/react/types/theme").Token<"surface_brighter", string, "colors", "hms-ui">;
            surface_dim: import("@stitches/react/types/theme").Token<"surface_dim", string, "colors", "hms-ui">;
            on_surface_high: import("@stitches/react/types/theme").Token<"on_surface_high", string, "colors", "hms-ui">;
            on_surface_medium: import("@stitches/react/types/theme").Token<"on_surface_medium", string, "colors", "hms-ui">;
            on_surface_low: import("@stitches/react/types/theme").Token<"on_surface_low", string, "colors", "hms-ui">;
            border_default: import("@stitches/react/types/theme").Token<"border_default", string, "colors", "hms-ui">;
            border_bright: import("@stitches/react/types/theme").Token<"border_bright", string, "colors", "hms-ui">;
            alert_success: import("@stitches/react/types/theme").Token<"alert_success", string, "colors", "hms-ui">;
            alert_warning: import("@stitches/react/types/theme").Token<"alert_warning", string, "colors", "hms-ui">;
            alert_error_default: import("@stitches/react/types/theme").Token<"alert_error_default", string, "colors", "hms-ui">;
            alert_error_bright: import("@stitches/react/types/theme").Token<"alert_error_bright", string, "colors", "hms-ui">;
            alert_error_brighter: import("@stitches/react/types/theme").Token<"alert_error_brighter", string, "colors", "hms-ui">;
            alert_error_dim: import("@stitches/react/types/theme").Token<"alert_error_dim", string, "colors", "hms-ui">;
        };
        shadows: {
            sm: import("@stitches/react/types/theme").Token<"sm", string, "shadows", "hms-ui">;
            md: import("@stitches/react/types/theme").Token<"md", string, "shadows", "hms-ui">;
        };
        fonts: {
            sans: import("@stitches/react/types/theme").Token<"sans", string, "fonts", "hms-ui">;
        };
        fontSizes: {
            h1: import("@stitches/react/types/theme").Token<"h1", string, "fontSizes", "hms-ui">;
            h2: import("@stitches/react/types/theme").Token<"h2", string, "fontSizes", "hms-ui">;
            h3: import("@stitches/react/types/theme").Token<"h3", string, "fontSizes", "hms-ui">;
            h4: import("@stitches/react/types/theme").Token<"h4", string, "fontSizes", "hms-ui">;
            h5: import("@stitches/react/types/theme").Token<"h5", string, "fontSizes", "hms-ui">;
            h6: import("@stitches/react/types/theme").Token<"h6", string, "fontSizes", "hms-ui">;
            tiny: import("@stitches/react/types/theme").Token<"tiny", string, "fontSizes", "hms-ui">;
            xs: import("@stitches/react/types/theme").Token<"xs", string, "fontSizes", "hms-ui">;
            sm: import("@stitches/react/types/theme").Token<"sm", string, "fontSizes", "hms-ui">;
            md: import("@stitches/react/types/theme").Token<"md", string, "fontSizes", "hms-ui">;
            lg: import("@stitches/react/types/theme").Token<"lg", string, "fontSizes", "hms-ui">;
        };
        fontWeights: {
            semiBold: import("@stitches/react/types/theme").Token<"semiBold", string, "fontWeights", "hms-ui">;
            medium: import("@stitches/react/types/theme").Token<"medium", string, "fontWeights", "hms-ui">;
            regular: import("@stitches/react/types/theme").Token<"regular", string, "fontWeights", "hms-ui">;
        };
        lineHeights: {
            h1: import("@stitches/react/types/theme").Token<"h1", string, "lineHeights", "hms-ui">;
            h2: import("@stitches/react/types/theme").Token<"h2", string, "lineHeights", "hms-ui">;
            h3: import("@stitches/react/types/theme").Token<"h3", string, "lineHeights", "hms-ui">;
            h4: import("@stitches/react/types/theme").Token<"h4", string, "lineHeights", "hms-ui">;
            h5: import("@stitches/react/types/theme").Token<"h5", string, "lineHeights", "hms-ui">;
            h6: import("@stitches/react/types/theme").Token<"h6", string, "lineHeights", "hms-ui">;
            tiny: import("@stitches/react/types/theme").Token<"tiny", string, "lineHeights", "hms-ui">;
            xs: import("@stitches/react/types/theme").Token<"xs", string, "lineHeights", "hms-ui">;
            sm: import("@stitches/react/types/theme").Token<"sm", string, "lineHeights", "hms-ui">;
            md: import("@stitches/react/types/theme").Token<"md", string, "lineHeights", "hms-ui">;
        };
        radii: {
            0: import("@stitches/react/types/theme").Token<"0", string, "radii", "hms-ui">;
            1: import("@stitches/react/types/theme").Token<"1", string, "radii", "hms-ui">;
            2: import("@stitches/react/types/theme").Token<"2", string, "radii", "hms-ui">;
            3: import("@stitches/react/types/theme").Token<"3", string, "radii", "hms-ui">;
            4: import("@stitches/react/types/theme").Token<"4", string, "radii", "hms-ui">;
            round: import("@stitches/react/types/theme").Token<"round", string, "radii", "hms-ui">;
        };
        space: {
            0: import("@stitches/react/types/theme").Token<"0", string, "space", "hms-ui">;
            xs: import("@stitches/react/types/theme").Token<"xs", string, "space", "hms-ui">;
            sm: import("@stitches/react/types/theme").Token<"sm", string, "space", "hms-ui">;
            md: import("@stitches/react/types/theme").Token<"md", string, "space", "hms-ui">;
            lg: import("@stitches/react/types/theme").Token<"lg", string, "space", "hms-ui">;
            xl: import("@stitches/react/types/theme").Token<"xl", string, "space", "hms-ui">;
            px: import("@stitches/react/types/theme").Token<"px", string, "space", "hms-ui">;
            1: import("@stitches/react/types/theme").Token<"1", string, "space", "hms-ui">;
            2: import("@stitches/react/types/theme").Token<"2", string, "space", "hms-ui">;
            3: import("@stitches/react/types/theme").Token<"3", string, "space", "hms-ui">;
            4: import("@stitches/react/types/theme").Token<"4", string, "space", "hms-ui">;
            5: import("@stitches/react/types/theme").Token<"5", string, "space", "hms-ui">;
            6: import("@stitches/react/types/theme").Token<"6", string, "space", "hms-ui">;
            7: import("@stitches/react/types/theme").Token<"7", string, "space", "hms-ui">;
            8: import("@stitches/react/types/theme").Token<"8", string, "space", "hms-ui">;
            9: import("@stitches/react/types/theme").Token<"9", string, "space", "hms-ui">;
            10: import("@stitches/react/types/theme").Token<"10", string, "space", "hms-ui">;
            11: import("@stitches/react/types/theme").Token<"11", string, "space", "hms-ui">;
            12: import("@stitches/react/types/theme").Token<"12", string, "space", "hms-ui">;
            13: import("@stitches/react/types/theme").Token<"13", string, "space", "hms-ui">;
            14: import("@stitches/react/types/theme").Token<"14", string, "space", "hms-ui">;
            15: import("@stitches/react/types/theme").Token<"15", string, "space", "hms-ui">;
            16: import("@stitches/react/types/theme").Token<"16", string, "space", "hms-ui">;
            17: import("@stitches/react/types/theme").Token<"17", string, "space", "hms-ui">;
            18: import("@stitches/react/types/theme").Token<"18", string, "space", "hms-ui">;
            19: import("@stitches/react/types/theme").Token<"19", string, "space", "hms-ui">;
            20: import("@stitches/react/types/theme").Token<"20", string, "space", "hms-ui">;
            24: import("@stitches/react/types/theme").Token<"24", string, "space", "hms-ui">;
            28: import("@stitches/react/types/theme").Token<"28", string, "space", "hms-ui">;
            32: import("@stitches/react/types/theme").Token<"32", string, "space", "hms-ui">;
            36: import("@stitches/react/types/theme").Token<"36", string, "space", "hms-ui">;
            40: import("@stitches/react/types/theme").Token<"40", string, "space", "hms-ui">;
            44: import("@stitches/react/types/theme").Token<"44", string, "space", "hms-ui">;
            48: import("@stitches/react/types/theme").Token<"48", string, "space", "hms-ui">;
            52: import("@stitches/react/types/theme").Token<"52", string, "space", "hms-ui">;
            56: import("@stitches/react/types/theme").Token<"56", string, "space", "hms-ui">;
            60: import("@stitches/react/types/theme").Token<"60", string, "space", "hms-ui">;
            64: import("@stitches/react/types/theme").Token<"64", string, "space", "hms-ui">;
            72: import("@stitches/react/types/theme").Token<"72", string, "space", "hms-ui">;
            80: import("@stitches/react/types/theme").Token<"80", string, "space", "hms-ui">;
            96: import("@stitches/react/types/theme").Token<"96", string, "space", "hms-ui">;
            100: import("@stitches/react/types/theme").Token<"100", string, "space", "hms-ui">;
        };
        borderWidths: {
            light: import("@stitches/react/types/theme").Token<"light", string, "borderWidths", "hms-ui">;
            normal: import("@stitches/react/types/theme").Token<"normal", string, "borderWidths", "hms-ui">;
            bold: import("@stitches/react/types/theme").Token<"bold", string, "borderWidths", "hms-ui">;
            extrabold: import("@stitches/react/types/theme").Token<"extrabold", string, "borderWidths", "hms-ui">;
            black: import("@stitches/react/types/theme").Token<"black", string, "borderWidths", "hms-ui">;
        };
    }> | undefined;
}) => string & {
    className: string;
    selector: string;
} & import("@stitches/react/types/stitches").ThemeTokens<{
    colors: {
        primary_default: string;
        primary_bright: string;
        primary_dim: string;
        primary_disabled: string;
        on_primary_high: string;
        on_primary_medium: string;
        on_primary_low: string;
        secondary_default: string;
        secondary_bright: string;
        secondary_dim: string;
        secondary_disabled: string;
        on_secondary_high: string;
        on_secondary_medium: string;
        on_secondary_low: string;
        background_default: string;
        background_dim: string;
        surface_default: string;
        surface_bright: string;
        surface_brighter: string;
        surface_dim: string;
        on_surface_high: string;
        on_surface_medium: string;
        on_surface_low: string;
        border_default: string;
        border_bright: string;
        alert_success: string;
        alert_warning: string;
        alert_error_default: string;
        alert_error_bright: string;
        alert_error_brighter: string;
        alert_error_dim: string;
    };
    shadows: {
        sm: string;
        md: string;
    };
    fonts: {
        sans: string;
    };
    fontSizes: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        tiny: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    fontWeights: {
        semiBold: number;
        medium: number;
        regular: number;
    };
    lineHeights: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        tiny: string;
        xs: string;
        sm: string;
        md: string;
    };
    radii: {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        round: string;
    };
    space: {
        0: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        px: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        100: string;
    };
    borderWidths: {
        light: string;
        normal: string;
        bold: string;
        extrabold: string;
        black: string;
    };
}, "hms-ui">;
export declare type CSS = Stitches.CSS<typeof HmsStitches>;
export {};

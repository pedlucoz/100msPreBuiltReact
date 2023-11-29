import type * as Stitches from '@stitches/react';
export declare const baseConfig: {
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
};
export declare const defaultUtils: {
    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => {
        backgroundColor: {
            readonly [Stitches.$$PropertyValue]: "backgroundColor";
        };
    };
    c: (value: Stitches.PropertyValue<'color'>) => {
        color: {
            readonly [Stitches.$$PropertyValue]: "color";
        };
    };
    r: (value: Stitches.ScaleValue<'radii'>) => {
        borderRadius: {
            readonly [Stitches.$$ScaleValue]: "radii";
        };
    };
    fs: (value: Stitches.PropertyValue<'fontSize'> | number | string) => {
        fontSize: string | number | {
            readonly [Stitches.$$PropertyValue]: "fontSize";
        };
    };
    size: (value: Stitches.ScaleValue<'space'> | number | string) => {
        height: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        width: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    w: (value: Stitches.ScaleValue<'space'> | number | string) => {
        width: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    h: (value: Stitches.ScaleValue<'space'> | number | string) => {
        height: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    p: (value: Stitches.ScaleValue<'space'> | number | string) => {
        padding: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pt: (value: Stitches.ScaleValue<'space'> | number | string) => {
        paddingTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pr: (value: Stitches.ScaleValue<'space'> | number | string) => {
        paddingRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pb: (value: Stitches.ScaleValue<'space'> | number | string) => {
        paddingBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    pl: (value: Stitches.ScaleValue<'space'> | number | string) => {
        paddingLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    px: (value: Stitches.ScaleValue<'space'> | number | string) => {
        paddingLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        paddingRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    py: (value: Stitches.ScaleValue<'space'> | number | string) => {
        paddingTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        paddingBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    m: (value: Stitches.ScaleValue<'space'> | number | string) => {
        margin: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mt: (value: Stitches.ScaleValue<'space'> | number | string) => {
        marginTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mr: (value: Stitches.ScaleValue<'space'> | number | string) => {
        marginRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mb: (value: Stitches.ScaleValue<'space'> | number | string) => {
        marginBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    ml: (value: Stitches.ScaleValue<'space'> | number | string) => {
        marginLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    mx: (value: Stitches.ScaleValue<'space'> | number | string) => {
        marginLeft: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        marginRight: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
    my: (value: Stitches.ScaleValue<'space'> | number | string) => {
        marginTop: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
        marginBottom: string | number | {
            readonly [Stitches.$$ScaleValue]: "space";
        };
    };
};
export declare const defaultMedia: {
    allowMotion: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    ls: string;
};
export declare const defaultThemeMap: {
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

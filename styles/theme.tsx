import { Box, createTheme, SimplePaletteColorOptions } from "@mui/material";

export const breakpoints = {
  desktopLarge: "@media (min-width: 1366px)",
  desktopSmall: "@media (min-width: 1024px)",
  tabletLarge: "@media (min-width: 768px)",
  tabletSmall: "@media (min-width: 576px)",
  phoneLarge: "@media (min-width: 360px)",
  phoneSmall: "@media (min-width: 0px)",
};

export const colors = {
  white: "#ffffff",
  black: "#1a1a1a",
  lightGrey: "#f1f4f8",
  mediumGrey: "#e3e3e3",
  turquoise: "#00b4a6",
  lightTurquoise: "#aae6e1",
  mediumBurgundy: "#ad898a",
  lightBurgundy: "#ffdfd9",
};

declare module "@mui/material" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    ps: true; // phone small
    pl: true; // phone large
    ts: true; // tablet small
    tl: true; // tablet large
    ds: true; // desktop small
    dl: true; // desktop large
  }

  interface Palette {
    white: Palette["primary"];
    black: Palette["primary"];
    gray: Palette["primary"];
    turquoise: Palette["primary"];
    burgundy: Palette["primary"];
  }

  interface PaletteOptions {
    white: Palette["primary"];
    black: Palette["primary"];
    gray: Palette["primary"];
    turquoise: Palette["primary"];
    burgundy: Palette["primary"];
  }

  interface PaletteColor {
    medium?: string;
  }

  interface SimplePaletteColorOptions {
    medium?: string;
  }
}

const typographyDefaults = {
  fontFamily: "Montserrat, sans-serif",
  fontStyle: "normal",
  color: colors.black,
  margin: 0,
};

export const theme = createTheme({
  palette: {
    white: {
      main: colors.white,
      light: colors.white,
      medium: colors.white,
      dark: colors.white,
      contrastText: colors.black,
    },
    black: {
      main: colors.black,
      light: colors.black,
      medium: colors.black,
      dark: colors.black,
      contrastText: colors.white,
    },
    gray: {
      main: colors.lightGrey,
      light: colors.lightGrey,
      medium: colors.mediumGrey,
      dark: colors.mediumGrey,
      contrastText: colors.black,
    },
    turquoise: {
      main: colors.turquoise,
      light: colors.lightTurquoise,
      medium: colors.lightTurquoise,
      dark: colors.turquoise,
      contrastText: colors.white,
    },
    burgundy: {
      main: colors.mediumBurgundy,
      light: colors.lightBurgundy,
      medium: colors.mediumBurgundy,
      dark: colors.mediumBurgundy,
      contrastText: colors.black,
    },
  },
  breakpoints: {
    values: {
      ps: 0,
      pl: 360,
      ts: 576,
      tl: 768,
      ds: 1024,
      dl: 1366,
    },
  },
  spacing: 10,
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      ...typographyDefaults,
      fontWeight: 600,
      fontSize: "90px",
      lineHeight: "110%",
      marginBottom: "40px",
      [breakpoints.phoneSmall]: {
        fontSize: "34px",
      },
      [breakpoints.phoneLarge]: {
        fontSize: "34px",
      },
      [breakpoints.tabletSmall]: {
        fontSize: "50px",
      },
      [breakpoints.tabletLarge]: {
        fontSize: "50px",
      },
      [breakpoints.desktopSmall]: {
        fontSize: "66px",
      },
      [breakpoints.desktopLarge]: {
        fontSize: "90px",
      },
      "& strong": {
        fontWeight: 600,
        color: colors.turquoise,
      },
    },
    h2: {
      ...typographyDefaults,
      fontWeight: 600,
      fontSize: "66px",
      lineHeight: "100%",
      marginBottom: "40px",
      [breakpoints.phoneSmall]: {
        fontSize: "30px",
      },
      [breakpoints.phoneLarge]: {
        fontSize: "30px",
      },
      [breakpoints.tabletSmall]: {
        fontSize: "44px",
      },
      [breakpoints.tabletLarge]: {
        fontSize: "44px",
      },
      [breakpoints.desktopSmall]: {
        fontSize: "60px",
      },
      [breakpoints.desktopLarge]: {
        fontSize: "66px",
      },
      "& strong": {
        fontWeight: 600,
        color: colors.turquoise,
      },
    },
    h3: {
      ...typographyDefaults,
      fontWeight: 600,
      fontSize: "40px",
      lineHeight: "40px",
      [breakpoints.phoneSmall]: {
        fontSize: "16px",
      },
      [breakpoints.phoneLarge]: {
        fontSize: "16px",
      },
      [breakpoints.tabletSmall]: {
        fontSize: "20px",
      },
      [breakpoints.tabletLarge]: {
        fontSize: "20px",
      },
      [breakpoints.desktopSmall]: {
        fontSize: "30px",
      },
      [breakpoints.desktopLarge]: {
        fontSize: "40px",
      },
    },
    h4: {
      ...typographyDefaults,
      fontWeight: 600,
      fontSize: "34px",
      lineHeight: "44.2px",
    },
    h5: {
      ...typographyDefaults,
      fontWeight: 700,
      fontSize: "30px",
      lineHeight: "39px",
      mb: 2,
      [breakpoints.phoneSmall]: {
        fontSize: "20px",
      },
      [breakpoints.phoneLarge]: {
        fontSize: "20px",
      },
      [breakpoints.tabletSmall]: {
        fontSize: "24px",
      },
      [breakpoints.tabletLarge]: {
        fontSize: "24px",
      },
      [breakpoints.desktopSmall]: {
        fontSize: "30px",
      },
      [breakpoints.desktopLarge]: {
        fontSize: "34px",
      },
    },
    h6: {
      ...typographyDefaults,
      fontSize: "22px",
      lineHeight: "29px",
      fontWeight: 600,
    },
    body1: {
      ...typographyDefaults,
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 400,
      fontSize: "22px",
      lineHeight: "150%",
      [breakpoints.phoneSmall]: {
        fontSize: "16px",
      },
      [breakpoints.phoneLarge]: {
        fontSize: "16px",
      },
      [breakpoints.tabletSmall]: {
        fontSize: "18px",
      },
      [breakpoints.tabletLarge]: {
        fontSize: "18px",
      },
      [breakpoints.desktopSmall]: {
        fontSize: "20px",
      },
      [breakpoints.desktopLarge]: {
        fontSize: "22px",
      },
    },
    body2: {
      ...typographyDefaults,
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "24px",
      [breakpoints.phoneSmall]: {
        fontSize: "14px",
      },
      [breakpoints.phoneLarge]: {
        fontSize: "14px",
      },
      [breakpoints.tabletSmall]: {
        fontSize: "14px",
      },
      [breakpoints.tabletLarge]: {
        fontSize: "14px",
      },
      [breakpoints.desktopSmall]: {
        fontSize: "16px",
      },
      [breakpoints.desktopLarge]: {
        fontSize: "18px",
      },
    },
  },
});

export const typography = {
  h1: {
    ...typographyDefaults,
    fontWeight: 600,
    fontSize: "90px",
    lineHeight: "110%",
    marginBottom: "40px",
    [breakpoints.phoneSmall]: {
      fontSize: "34px",
    },
    [breakpoints.phoneLarge]: {
      fontSize: "34px",
    },
    [breakpoints.tabletSmall]: {
      fontSize: "50px",
    },
    [breakpoints.tabletLarge]: {
      fontSize: "50px",
    },
    [breakpoints.desktopSmall]: {
      fontSize: "66px",
    },
    [breakpoints.desktopLarge]: {
      fontSize: "90px",
    },
    "& strong": {
      fontWeight: 600,
      color: colors.turquoise,
    },
  },
  h2: {
    ...typographyDefaults,
    fontWeight: 600,
    fontSize: "66px",
    lineHeight: "100%",
    marginBottom: "40px",
    [breakpoints.phoneSmall]: {
      fontSize: "30px",
    },
    [breakpoints.phoneLarge]: {
      fontSize: "30px",
    },
    [breakpoints.tabletSmall]: {
      fontSize: "44px",
    },
    [breakpoints.tabletLarge]: {
      fontSize: "44px",
    },
    [breakpoints.desktopSmall]: {
      fontSize: "60px",
    },
    [breakpoints.desktopLarge]: {
      fontSize: "66px",
    },
    "& strong": {
      fontWeight: 600,
      color: colors.turquoise,
    },
  },
  h3: {
    ...typographyDefaults,
    fontWeight: 600,
    fontSize: "40px",
    lineHeight: "40px",
    [breakpoints.phoneSmall]: {
      fontSize: "16px",
    },
    [breakpoints.phoneLarge]: {
      fontSize: "16px",
    },
    [breakpoints.tabletSmall]: {
      fontSize: "20px",
    },
    [breakpoints.tabletLarge]: {
      fontSize: "20px",
    },
    [breakpoints.desktopSmall]: {
      fontSize: "30px",
    },
    [breakpoints.desktopLarge]: {
      fontSize: "40px",
    },
  },
  h4: {
    ...typographyDefaults,
    fontWeight: 600,
    fontSize: "34px",
    lineHeight: "44.2px",
  },
  h5: {
    ...typographyDefaults,
    fontWeight: 700,
    fontSize: "30px",
    lineHeight: "39px",
    mb: 2,
    [breakpoints.phoneSmall]: {
      fontSize: "20px",
    },
    [breakpoints.phoneLarge]: {
      fontSize: "20px",
    },
    [breakpoints.tabletSmall]: {
      fontSize: "24px",
    },
    [breakpoints.tabletLarge]: {
      fontSize: "24px",
    },
    [breakpoints.desktopSmall]: {
      fontSize: "30px",
    },
    [breakpoints.desktopLarge]: {
      fontSize: "34px",
    },
  },
  h6: {
    ...typographyDefaults,
    fontSize: "22px",
    lineHeight: "29px",
    fontWeight: 600,
  },
  p: { ...typographyDefaults },
  bodyLarge: {
    ...typographyDefaults,
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "22px",
    lineHeight: "150%",
    [breakpoints.phoneSmall]: {
      fontSize: "16px",
    },
    [breakpoints.phoneLarge]: {
      fontSize: "16px",
    },
    [breakpoints.tabletSmall]: {
      fontSize: "18px",
    },
    [breakpoints.tabletLarge]: {
      fontSize: "18px",
    },
    [breakpoints.desktopSmall]: {
      fontSize: "20px",
    },
    [breakpoints.desktopLarge]: {
      fontSize: "22px",
    },
  },
  body: {
    ...typographyDefaults,
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "24px",
    [breakpoints.phoneSmall]: {
      fontSize: "14px",
    },
    [breakpoints.phoneLarge]: {
      fontSize: "14px",
    },
    [breakpoints.tabletSmall]: {
      fontSize: "14px",
    },
    [breakpoints.tabletLarge]: {
      fontSize: "14px",
    },
    [breakpoints.desktopSmall]: {
      fontSize: "16px",
    },
    [breakpoints.desktopLarge]: {
      fontSize: "18px",
    },
  },
  blockquote: { ...typographyDefaults },
};

export const loader = (image: any) => `${image.src}?${image.width ?? ""}`;

export const privacyConductComponents = {
  h1: ({ children }) => (
    <Box
      component="h1"
      sx={{
        ...typography.h1,
      }}
    >
      {children}
    </Box>
  ),
  h2: ({ children }) => (
    <Box
      component="h2"
      sx={{
        ...typography.h2,
      }}
    >
      {children}
    </Box>
  ),
  p: ({ children }) => (
    <Box
      component="p"
      sx={{
        ...typography.body,
      }}
    >
      {children}
    </Box>
  ),
};

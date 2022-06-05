import { Box } from "@mui/material";

export const breakpoints = {
  dl: "@media (min-width: 1366px)",
  ds: "@media (min-width: 1024px)",
  tl: "@media (min-width: 768px)",
  ts: "@media (min-width: 576px)",
  pl: "@media (min-width: 360px)",
  ps: "@media (min-width: 0px)",
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

const typographyDefaults = {
  fontFamily: "Montserrat, sans-serif",
  fontStyle: "normal",
  color: colors.black,
  margin: 0,
};

export const typography = {
  h1: {
    ...typographyDefaults,
    fontWeight: 600,
    fontSize: "90px",
    lineHeight: "110%",
    marginBottom: "40px",
    [breakpoints.ps]: {
      fontSize: "34px",
      marginBottom: "30px",
    },
    [breakpoints.pl]: {
      fontSize: "34px",
    },
    [breakpoints.ts]: {
      fontSize: "50px",
    },
    [breakpoints.tl]: {
      fontSize: "50px",
    },
    [breakpoints.ds]: {
      fontSize: "66px",
    },
    [breakpoints.dl]: {
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
    [breakpoints.ps]: {
      fontSize: "30px",
    },
    [breakpoints.pl]: {
      fontSize: "30px",
    },
    [breakpoints.ts]: {
      fontSize: "44px",
    },
    [breakpoints.tl]: {
      fontSize: "44px",
    },
    [breakpoints.ds]: {
      fontSize: "60px",
    },
    [breakpoints.dl]: {
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
    [breakpoints.ps]: {
      fontSize: "16px",
    },
    [breakpoints.pl]: {
      fontSize: "16px",
    },
    [breakpoints.ts]: {
      fontSize: "20px",
    },
    [breakpoints.tl]: {
      fontSize: "20px",
    },
    [breakpoints.ds]: {
      fontSize: "30px",
    },
    [breakpoints.dl]: {
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
    [breakpoints.ps]: {
      fontSize: "20px",
    },
    [breakpoints.pl]: {
      fontSize: "20px",
    },
    [breakpoints.ts]: {
      fontSize: "24px",
    },
    [breakpoints.tl]: {
      fontSize: "24px",
    },
    [breakpoints.ds]: {
      fontSize: "30px",
    },
    [breakpoints.dl]: {
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
    [breakpoints.ps]: {
      fontSize: "16px",
    },
    [breakpoints.pl]: {
      fontSize: "16px",
    },
    [breakpoints.ts]: {
      fontSize: "18px",
    },
    [breakpoints.tl]: {
      fontSize: "18px",
    },
    [breakpoints.ds]: {
      fontSize: "20px",
    },
    [breakpoints.dl]: {
      fontSize: "22px",
    },
  },
  body: {
    ...typographyDefaults,
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "24px",
    [breakpoints.ps]: {
      fontSize: "14px",
    },
    [breakpoints.pl]: {
      fontSize: "14px",
    },
    [breakpoints.ts]: {
      fontSize: "14px",
    },
    [breakpoints.tl]: {
      fontSize: "14px",
    },
    [breakpoints.ds]: {
      fontSize: "16px",
    },
    [breakpoints.dl]: {
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

import { Box, Grid } from "@mui/material";

export const breakpoints = {
  desktopLarge: "@media (max-width: 1920px)",
  desktopSmall: "@media (max-width: 1366px)",
  tabletLarge: "@media (max-width: 1024px)",
  tabletSmall: "@media (max-width: 768px)",
  phoneLarge: "@media (max-width: 576px)",
  phoneSmall: "@media (max-width: 360px)",
};

export const colors = {
  white: "#ffffff",
  black: "#1a1a1a",
  lightGrey: "#f1f4f8",
  turquoise: "#00b4a6",
};

const typographyDefaults = {
  color: colors.black,
  margin: 0,
};

export const typography = {
  h1: {
    ...typographyDefaults,
    fontFamily: "Montserrat, sans-serif",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "70px",
    lineHeight: "100%",
    "& strong": {
      color: colors.turquoise,
    },
    [breakpoints.desktopSmall]: {
      fontSize: "66px",
    },
    [breakpoints.tabletLarge]: {
      fontSize: "50px",
    },
    [breakpoints.phoneLarge]: {
      fontSize: "34px",
    },
  },
  h2: { ...typographyDefaults },
  h3: { ...typographyDefaults },
  h4: { ...typographyDefaults },
  h5: { ...typographyDefaults },
  h6: { ...typographyDefaults },
  p: { ...typographyDefaults },
  bodyLarge: {
    ...typographyDefaults,
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "150%",
  },
  blockquote: { ...typographyDefaults },
};

const extractID = (rawText: string) => {
  const matches = []; // rawText.match(/(?<=\{#)(.*)(?=\}$)/);
  const id = matches && matches.length > 0 ? matches[0] : null;
  const text = rawText.replace(/ \{#.*\}$/, "");

  return [id, text];
};

export const components = (
  color: string = colors.black,
  darkColor: string = colors.black,
  isMobile: boolean = false
) => ({
  // chapter title
  h1: ({ children }) => {
    const rawText = children as string;
    const [id, text] = extractID(rawText);
    return (
      <Grid item xs={8} sm={6}>
        <Box
          id={id}
          component="h1"
          sx={{
            ...typography.h1,
            color: darkColor,
          }}
        >
          {text}
        </Box>
      </Grid>
    );
  },
  // section title
  h2: ({ children }) => (
    <Grid item xs={8} sm={7}>
      <Box
        component="h2"
        sx={{
          ...typography.h2,
          mt: "80px",
        }}
      >
        {children}
      </Box>
    </Grid>
  ),
  // section title with background
  h3: ({ children }) => (
    <Grid item xs={8} sm={7}>
      <Box
        component="h3"
        sx={{
          ...typography.h3,
          mt: "80px",
        }}
      >
        <mark
          style={{
            borderRadius: "500px",
            backgroundColor: color,
            borderTop: `0px solid ${color}`,
            borderRight: `20px solid ${color}`,
            borderBottom: `0px solid ${color}`,
            borderLeft: `20px solid ${color}`,
          }}
        >
          {children}
        </mark>
      </Box>
    </Grid>
  ),
  // exercise title
  h4: ({ children }) => (
    <Grid item xs={8} sm={7}>
      <Box
        component="h4"
        sx={{
          ...typography.h4,
          width: "100%",
          borderRadius: "50px 50px 0px 0px",
          backgroundColor: color,
          pt: "26px",
          pl: "20px",
          pr: "20px",
          pb: 0,
          mt: "80px",
        }}
      >
        {children}
      </Box>
    </Grid>
  ),
  // reading time
  h6: ({ children }) => (
    <Box
      component="h6"
      sx={{
        ...typography.h6,
        position: "fixed",
        top: 0,
        left: "60px",
        pl: "20px",
        width: "100%",
      }}
    >
      {`READING TIME ${children}`}
    </Box>
  ),
  p: ({ children }) => (
    <Grid item xs={8} sm={6}>
      <Box
        component="p"
        sx={{
          ...typography.p,
          width: "100%",
          mt: "40px",
        }}
      >
        {children}
      </Box>
    </Grid>
  ),
  blockquote: ({ children }) => (
    <Grid item xs={8} sm={7}>
      <Grid
        item
        container
        direction="row"
        columns={isMobile ? 8 : 7}
        columnSpacing="20px"
        justifyContent="flex-end"
      >
        <Grid
          item
          container
          direction="row"
          columns={isMobile ? 8 : 7}
          columnSpacing="20px"
          justifyContent="flex-end"
          sx={{
            marginLeft: "20px",
            backgroundColor: color,
            borderRadius: "0px 0px 50px 50px",
            pb: "40px",
          }}
        >
          <Grid item xs={8} sm={6}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ),
  ul: ({ children }) => (
    <Grid
      item
      xs={8}
      sm={6}
      sx={{
        "& ul": { mb: "25px" },
        "& li": { mb: "5px" },
        "& li ul": { mb: "5px" },
      }}
    >
      <Box
        component="ul"
        sx={{
          ...typography.p,
        }}
      >
        {children}
      </Box>
    </Grid>
  ),
  // top tags
  h5: ({ children }) => (
    <Grid item xs={8}>
      <Box
        component="ul"
        sx={{
          ...typography.h5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          p: 0,
          m: 0,
          mt: "25px",
          mb: "40px",
          "& li": {
            border: "1px solid black",
            borderRadius: "50px",
            display: "flex",
            marginBottom: "14px",
            marginRight: "14px",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "4px",
            paddingBottom: "4px",
          },
          listStyleType: "none",
        }}
      >
        {children.split(" | ").map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </Box>
    </Grid>
  ),
  // phase / chapter tags
  ol: ({ children }) => (
    <Grid item xs={8} sm={2}>
      <Box
        component="ol"
        sx={{
          ...typography.h5,
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          p: 0,
          mt: "12px",
          listStyleType: "none",
          "& li": {
            display: "flex",
            alignSelf: "flex-start",
            backgroundColor: color,
            borderRadius: "50px",
            marginBottom: "14px",
            marginRight: "14px",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "4px",
            paddingBottom: "4px",
          },
        }}
      >
        {children}
      </Box>
    </Grid>
  ),
  pre: ({ children }) => {
    const rawText = children.props.children as string;
    const [id, text] = extractID(rawText);

    return <Box id={id}>{text}</Box>;
  },
  img: ({ src, alt }) => (
    <Grid item xs={8} sm={6} sx={{ maxWidth: "100%", textAlign: "center" }}>
      <img
        src={src}
        alt={alt}
        style={{
          margin: "0 auto",
          marginTop: "80px",
          marginBottom: "80px",
          width: "100%",
        }}
      />
    </Grid>
  ),
  table: ({ children }) => <table>{children}</table>,
});

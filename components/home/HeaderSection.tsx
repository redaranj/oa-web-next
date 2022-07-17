import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { MDXProvider } from "@mdx-js/react";
// import { OutlinedButton } from "components/common/OutlinedButton";
import header1 from "public/images/header-1.png";
import header2 from "public/images/header-2.png";
import header3 from "public/images/header-3.png";
import header4 from "public/images/header-4.png";
import header5 from "public/images/header-5.png";
import header6 from "public/images/header-6.png";
import header7 from "public/images/header-7.png";
import header8 from "public/images/header-8.png";

const H3 = ({ children }) => {
  const { bodyLarge } = typography;

  return (
    <Box component="p" sx={{ ...bodyLarge, color: "red" }}>
      {children}
    </Box>
  );
};

export const HeaderSection: FC = ({ children }) => {
  const { white } = colors;
  const { ps, pl, ts, tl, ds, dl } = breakpoints;
  const [first, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        sx={{
          flexDirection: "row",
          [ps]: { flexDirection: "column-reverse" },
          [pl]: { flexDirection: "row" },
        }}
      >
        <Grid
          container
          direction="column"
          item
          sx={{
            width: "50%",
            [ps]: {
              width: "100%",
            },
            [tl]: {
              width: "50%",
            },
          }}
        >
          <Grid item>
            <MDXProvider>{first}</MDXProvider>
          </Grid>
          <Grid item container direction="column" spacing={6} sx={{ mb: 12 }}>
            <Grid item>
              <MDXProvider
                components={{
                  h3: H3,
                }}
              >
                {rest}
              </MDXProvider>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            width: "50%",
            overflow: "visible",
            [ps]: {
              width: "100%",
            },
            [tl]: {
              width: "50%",
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              minHeight: 500,
              overflow: "visible",
              width: "100%",
              backgroundImage: `url(${header1.src}), url(${header2.src}), url(${header3.src}), url(${header4.src}), url(${header5.src}), url(${header6.src}), url(${header7.src}), url(${header8.src})`,
              backgroundSize: "300px",
              backgroundPosition:
                "0% -25%, 50% 0%, 0% 25%, 50% 0%, 0% 50%, 50% 0%, 0% 25%, 75% 0%",
              backgroundRepeat: "no-repeat",
              [ps]: {
                width: "100%",
                height: 200,
              },
              [pl]: {},
              [ts]: {},
              [tl]: {},
              [ds]: {
                backgroundSize: "250px",
                backgroundPosition:
                  "60px -100px, 380px 0px, 60px 210px, 380px 310px, 60px 500px, 380px 1000px, 60px 2500px, 380px 10000px",
              },
              [dl]: {
                backgroundSize: "300px",
              },
            }}
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};

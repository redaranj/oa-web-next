import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import header1 from "public/images/home-header-1.png";
import header2 from "public/images/home-header-2.png";

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
          <Grid item>{first}</Grid>
          <Grid item container direction="column" spacing={6} sx={{ mb: 12 }}>
            <Grid item>{rest}</Grid>
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
              backgroundImage: `url(${header1.src}), url(${header2.src})`,
              backgroundSize: "400px",
              backgroundPosition: "0% 0%, 25% 0%",
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
                backgroundPosition: "60px -100px, 380px 0px",
              },
              [dl]: {
                backgroundSize: "400px",
              },
            }}
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};

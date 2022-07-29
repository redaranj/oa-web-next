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
        spacing={6}
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
          <Grid item container direction="column" sx={{ mb: 12 }}>
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
              backgroundImage: `url(${header2.src}), url(${header1.src})`,
              backgroundSize: "100%",
              backgroundPosition: "100% 100%, 0% 0%",
              backgroundRepeat: "no-repeat",
              ml: 5,
              [ps]: {
                width: "100%",
                height: 200,
              },
              [pl]: {},
              [ts]: {},
              [tl]: {},
              [ds]: {
                backgroundSize: "250px",
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

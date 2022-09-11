import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { typography, colors, loader, breakpoints } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";
import ourTeamHeader from "public/images/our-team-who-we-are.png";

export const HeaderSection: FC<PropsWithChildren> = ({ children }) => {
  const { lightGrey, mediumGrey } = colors;
  const { bodyLarge } = typography;
  const { ps, pl, ts, tl, ds, dl } = breakpoints;
  const [first, ...rest] = children as any[];

  return (
    <BaseHeaderSection backgroundColor={lightGrey}>
      <Grid
        container
        sx={{
          borderBottom: `1px solid ${mediumGrey}`,
          flexDirection: "row",
          [ps]: { flexDirection: "column" },
          [tl]: { flexDirection: "row" },
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          item
          sx={{
            width: "50%",
            pr: 8,
            [ps]: { width: "100%", pt: 4 },
            [ts]: { width: "100%", pt: 6 },
            [tl]: { width: "50%" },
          }}
        >
          <Grid item container direction="column">
            <Grid item>{first}</Grid>
            <Grid item>
              <Box
                sx={{
                  "> p": bodyLarge,
                  maxWidth: 600,
                  mb: 6,
                  [ps]: { maxWidth: "100%", mb: 4 },
                  [pl]: { maxWidth: "100%", mb: 4 },
                  [tl]: { maxWidth: 400, mb: 6 },
                  [ds]: { maxWidth: 500 },
                  [dl]: { maxWidth: 600 },
                }}
              >
                {rest}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [ts]: { width: "50%" },
          }}
        >
          <Box
            sx={{
              width: 700,
              mb: -1,
              [ps]: { width: "100%", margin: "auto", mt: 6 },
              [ts]: { width: 600, mb: 0, mt: 8 },
              [tl]: { width: 550 },
              [ds]: { mr: "-20px", width: 600, mb: -1 },
              [dl]: { mr: "-20px", width: 700 },
            }}
          >
            <Image src={ourTeamHeader} alt="" loader={loader} />
          </Box>
        </Grid>
      </Grid>
    </BaseHeaderSection>
  );
};

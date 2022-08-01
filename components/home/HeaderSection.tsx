import { FC } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, loader } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import header1 from "public/images/home-header-1.png";
import header2 from "public/images/home-header-2.png";

export const HeaderSection: FC = ({ children }) => {
  const { white } = colors;
  const { ps, pl, tl } = breakpoints;
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
              position: "relative",
            }}
          >
            <Box sx={{ position: "absolute", width: 300, top: 0, left: 0 }}>
              <Image src={header1} alt="" loader={loader} />
            </Box>
            <Box sx={{ position: "absolute", width: 300, bottom: 0, right: 0 }}>
              <Image src={header2} alt="" loader={loader} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </PageSection>
  );
};

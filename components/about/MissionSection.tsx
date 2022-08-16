import { FC } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, typography, loader } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import bullhorn from "public/images/bullhorn.svg";

export const MissionSection: FC = ({ children }) => {
  const { white } = colors;
  const { bodyLarge } = typography;
  const { ps, tl } = breakpoints;

  return (
    <PageSection backgroundColor={white}>
      <Grid item container sx={{ flexDirection: "row-reverse" }}>
        <Grid
          item
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [tl]: { width: "50%" },
          }}
        >
          <Box
            sx={{
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <Image src={bullhorn} alt="" loader={loader} />
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [tl]: { width: "50%" },
          }}
        >
          <Box sx={{ "> p": bodyLarge }}>{children}</Box>
        </Grid>
      </Grid>
    </PageSection>
  );
};

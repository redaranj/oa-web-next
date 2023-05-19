import { FC, PropsWithChildren } from "react";
import Image from "next/legacy/image";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, typography, loader } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import handPhone from "public/images/AboutUs/Why-this-work-matter.png";

export const MissionSection: FC<PropsWithChildren> = ({ children }) => {
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
              mb: 0,
              [ps]: { mb: 4 },
              [tl]: { mb: 0 },
            }}
          >
            <Image src={handPhone} alt="" loader={loader} />
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

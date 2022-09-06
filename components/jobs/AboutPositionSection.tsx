import { FC } from "react";
import Image from "next/image";
import { Grid, Box } from "@mui/material";
import { colors, loader, typography, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import aboutPosition from "public/images/about-position.png";

export const AboutPositionSection: FC = ({ children }) => {
  const { lightGrey } = colors;
  const { bodyLarge } = typography;
  const { ps, ts } = breakpoints;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        sx={{
          flexDirection: "row",
          [ps]: {
            flexDirection: "column-reverse",
          },
          [ts]: {
            flexDirection: "row",
          },
        }}
      >
        <Grid
          item
          sx={{ width: "50%", [ps]: { width: "100%" }, [ts]: { width: "50%" } }}
        >
          <Box sx={{ "> p": bodyLarge, "> ul": bodyLarge }}>{children}</Box>
        </Grid>
        <Grid
          item
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [ts]: { width: "50%" },
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              px: 8,
              py: 20,
              [ps]: { px: 2, py: 3 },
              [ts]: { px: 8, py: 20 },
            }}
          >
            <Image src={aboutPosition} alt="" loader={loader} />
          </Box>
        </Grid>
      </Grid>
    </PageSection>
  );
};

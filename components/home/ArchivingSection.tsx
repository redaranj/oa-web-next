import { FC } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { PageSection } from "components/common/PageSection";
import { breakpoints, colors, typography, loader } from "styles/theme";
import mission1 from "public/images/mission-1.png";
import mission2 from "public/images/mission-2.png";

export const ArchivingSection: FC = ({ children }) => {
  const { outlinedButton, bodyLarge } = typography;
  const { lightGrey } = colors;
  const { ps, pl } = breakpoints;
  const [title, description, ...button] = children as any[];

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        spacing={6}
        sx={{
          flexDirection: "row",
          [ps]: { flexDirection: "column" },
          [pl]: { flexDirection: "row" },
        }}
      >
        <Grid item sx={{ width: "50%" }}>
          <Box
            sx={{
              height: "100%",
              position: "relative",
            }}
          >
            <Box sx={{ position: "absolute", width: 400, bottom: 0, right: 0 }}>
              <Image src={mission2} alt="" loader={loader} />
            </Box>
            <Box sx={{ position: "absolute", width: 400, top: 0, left: 0 }}>
              <Image src={mission1} alt="" loader={loader} />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          direction="column"
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [pl]: { width: "50%" },
          }}
        >
          <Grid item>
            <Box>{title}</Box>
            <Box sx={{ "> p": bodyLarge }}>{description}</Box>
            <Box
              sx={{
                a: outlinedButton,
                "> p": { mb: 4 },
              }}
            >
              {button}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};

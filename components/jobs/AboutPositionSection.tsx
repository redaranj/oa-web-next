import { FC } from "react";
import Image from "next/image";
import { Grid, Box } from "@mui/material";
import { colors, loader } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import eyes from "public/images/eyes.svg";

export const AboutPositionSection: FC = ({ children }) => {
  const { lightGrey } = colors;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        sx={{
          flexDirection: "row",
        }}
      >
        <Grid item sx={{ width: "50%" }}>
          {children}
        </Grid>
        <Grid item sx={{ width: "50%", textAlign: "center" }}>
          <Box sx={{ px: 8, py: 20 }}>
            <Image src={eyes} alt="" loader={loader} />
          </Box>
        </Grid>
      </Grid>
    </PageSection>
  );
};

import { FC } from "react";
import Image from "next/image";
import { Grid, Box } from "@mui/material";
import { colors, typography, loader } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";
import ourTeam from "public/images/our-team-who-we-are.png";

export const DiverseSection: FC = () => {
  const { white } = colors;
  const { h1, bodyLarge } = typography;

  return (
    <BaseHeaderSection backgroundColor={white}>
      <Grid
        container
        justifyContent="space-between"
        sx={{
          flexDirection: "row",
        }}
        spacing={6}
      >
        <Grid item container direction="column" justifyContent="center" xs={6}>
          <Grid item>
            <Box
              sx={{
                height: "100%",
                width: "90%",
              }}
            >
              <Image src={ourTeam} alt="" loader={loader} />
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Box sx={h1}>
            Creating a <strong>diverse environment</strong>
          </Box>
          <Box sx={bodyLarge}>
            OpenArchive is committed to creating a diverse environment and is
            proud to be an equal opportunity employer. All qualified applicants
            will receive consideration for employment without regard to race,
            color, religion, gender, gender identity or expression, sexual
            orientation, national origin, genetics, disability, age, or veteran
            status.
          </Box>
        </Grid>
      </Grid>
    </BaseHeaderSection>
  );
};
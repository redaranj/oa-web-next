import { FC } from "react";
import { Grid, Box } from "@mui/material";
import { colors, typography } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";
import diverse from "public/images/diverse.png";

export const DiverseSection: FC = () => {
  const { white } = colors;
  const { h1, body } = typography;

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
        <Grid item xs={6}>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              backgroundImage: `url(${diverse.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box sx={h1}>
            Creating a <strong>diverse environment</strong>
          </Box>
          <Box sx={body}>
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

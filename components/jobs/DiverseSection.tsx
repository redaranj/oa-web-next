import { FC, PropsWithChildren } from "react";
import Image from "next/legacy/image";
import { Grid, Box } from "@mui/material";
import { colors, typography, loader, breakpoints } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";
import diverseEnvironment from "public/images/diverse-environment.png";

const { white } = colors;

type DiverseSectionProps = PropsWithChildren<{
  backgroundColor: string;
}>;

export const DiverseSection: FC<DiverseSectionProps> = ({
  backgroundColor = white,
}) => {
  const { h1, bodyLarge } = typography;
  const { ps, ts } = breakpoints;

  return (
    <BaseHeaderSection backgroundColor={backgroundColor}>
      <Grid
        container
        justifyContent="space-between"
        sx={{
          flexDirection: "row",
          [ps]: {
            flexDirection: "column",
          },
          [ts]: { flexDirection: "row" },
        }}
        spacing={6}
      >
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          sx={{ width: "50%", [ps]: { width: "100%", [ts]: { width: "50%" } } }}
        >
          <Grid item>
            <Box
              sx={{
                height: "100%",
                width: "110%",
              }}
            >
              <Image src={diverseEnvironment} alt="" loader={loader} />
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{ width: "50%", [ps]: { width: "100%", [ts]: { width: "50%" } } }}
        >
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

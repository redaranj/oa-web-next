import { FC } from "react";
import { Grid } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { OutlinedButton } from "components/common/OutlinedButton";
import teamAbout from "images/team-about.png";

export const JoinSection: FC = ({ children }) => {
  const { lightGrey } = colors;
  const { ps, tl } = breakpoints;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        sx={{
          flexDirection: "row",
          [ps]: { flexDirection: "column" },
          [tl]: { flexDirection: "row" },
        }}
      >
        <Grid
          container
          direction="column"
          item
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [tl]: { width: "50%" },
          }}
        >
          <Grid item>{children}</Grid>
          <Grid item>
            <OutlinedButton arrowDirection="right">Read More</OutlinedButton>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            width: "50%",
            backgroundImage: `url(${teamAbout.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Grid>
    </PageSection>
  );
};

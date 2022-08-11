import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import handPhone from "public/images/hand-phone.svg";

export const BeliefsSection: FC = ({ children }) => {
  const { lightGrey } = colors;
  const { bodyLarge } = typography;
  const { ps, tl } = breakpoints;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid container direction="column">
        <Grid
          item
          container
          spacing={8}
          sx={{
            flexDirection: "row",
            [ps]: {
              flexDirection: "column",
            },
            [tl]: {
              flexDirection: "row",
            },
          }}
        >
          <Grid
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
            <Box
              sx={{
                backgroundImage: `url(${handPhone.src})`,
                backgroundSize: "40%",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                height: "100%",
                marginLeft: -4,
              }}
            />
          </Grid>
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
            <Grid item>
              <Box sx={{ "> p": bodyLarge }}>{children}</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};

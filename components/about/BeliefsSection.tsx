import { FC } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, typography, loader } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import handPhone from "public/images/hand-phone.png";

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
                margin: "0 auto",
                textAlign: "center",
                width: 300,
              }}
            >
              <Image src={handPhone} alt="" loader={loader} />
            </Box>
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

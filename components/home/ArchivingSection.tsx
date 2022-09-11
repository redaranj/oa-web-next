import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { PageSection } from "components/common/PageSection";
import { breakpoints, colors, typography, loader } from "styles/theme";
import mainTop3 from "public/images/main-top-3.png";
import mainPage4 from "public/images/main-page-4.png";

export const ArchivingSection: FC<PropsWithChildren> = ({ children }) => {
  const { outlinedButton, bodyLarge } = typography;
  const { lightGrey } = colors;
  const { ps, tl } = breakpoints;
  const [title, description, ...button] = children as any[];

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        spacing={6}
        sx={{
          flexDirection: "row",
          [ps]: { flexDirection: "column" },
          [tl]: { flexDirection: "row" },
        }}
      >
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
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
          <Grid
            item
            sx={{
              width: "90%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "100%",
                position: "relative",
                minHeight: 300,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "65%",
                  top: 0,
                  left: 0,
                  zIndex: 100,
                }}
              >
                <Image src={mainTop3} alt="" loader={loader} />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  width: "65%",
                  top: "35%",
                  left: "35%",
                }}
              >
                <Image src={mainPage4} alt="" loader={loader} />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [tl]: { width: "50%" },
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

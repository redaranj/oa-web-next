import { FC } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, loader, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { OutlinedButton } from "components/common/OutlinedButton";
import ourTeam from "images/our-team.svg";

export const HeaderSection: FC = ({ children }) => {
  const t = useTranslate();
  const { lightGrey } = colors;
  const { bodyLarge } = typography;
  const { ps, pl, ts, tl, ds, dl } = breakpoints;
  const [first, ...rest] = children as any[];

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
          justifyContent="space-around"
          item
          sx={{
            width: "50%",
            pr: 8,
            [ps]: { width: "100%", pt: 4 },
            [ts]: { width: "100%", pt: 6 },
            [tl]: { width: "50%" },
          }}
        >
          <Grid item container direction="column">
            <Grid item>{first}</Grid>
            <Grid item>
              <Box
                component="p"
                sx={{
                  ...bodyLarge,
                  maxWidth: 600,
                  mb: 6,
                  [ps]: { maxWidth: "100%", mb: 4 },
                  [pl]: { maxWidth: "100%", mb: 4 },
                  [tl]: { maxWidth: 400, mb: 6 },
                  [ds]: { maxWidth: 500 },
                  [dl]: { maxWidth: 600 },
                }}
              >
                {rest}
              </Box>
            </Grid>
            <Grid item>
              <OutlinedButton arrowDirection="down">{t("more")}</OutlinedButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            width: "50%",
            [ps]: { width: "100%" },
            [ts]: { width: "50%" },
          }}
        >
          <Box
            sx={{
              width: 700,
              mb: -8,
              [ps]: { width: "100%", margin: "auto", mt: 6 },
              [ts]: { width: 600, mb: 0, mt: 8 },
              [tl]: { width: 550 },
              [ds]: { mr: "-20px", width: 600 },
              [dl]: { mr: "-20px", width: 700 },
            }}
          >
            <Image src={ourTeam} alt="" loader={loader} />
          </Box>
        </Grid>
      </Grid>
    </PageSection>
  );
};

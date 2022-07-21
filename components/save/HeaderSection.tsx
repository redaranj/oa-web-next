import { FC } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints, loader } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { OutlinedButton } from "components/common/OutlinedButton";
import saveHeader from "public/images/save-header.png";
import saveLogo from "public/images/save-logo.png";

export const HeaderSection: FC = ({ children }) => {
  const t = useTranslate();
  const { lightGrey, mediumGrey } = colors;
  const { bodyLarge } = typography;
  const { ps, ts } = breakpoints;
  const [title, description, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={lightGrey} sx={{ pb: 0 }}>
      <Grid
        container
        sx={{
          flexDirection: "row",
          [ps]: { flexDirection: "column" },
          [ts]: { flexDirection: "row" },
        }}
      >
        <Grid
          container
          direction="column"
          item
          sx={{
            pt: "180px",
            pb: "250px",
            width: "50%",
            [ps]: {
              width: "100%",
            },
            [ts]: {
              width: "50%",
            },
          }}
        >
          <Grid item container direction="row" spacing="30px">
            <Grid item>
              <Box
                sx={{
                  width: "90px",
                  mt: "12px",
                }}
              >
                <Image src={saveLogo} loader={loader} alt="Save logo" />
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  width: "1px",
                  mt: "12px",
                  height: "70%",
                  backgroundColor: mediumGrey,
                }}
              />
            </Grid>
            <Grid item>{title}</Grid>
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Box
                component="p"
                sx={{ ...bodyLarge, maxWidth: "550px", mb: "60px" }}
              >
                {description}
              </Box>
            </Grid>
            <Grid item>
              <OutlinedButton arrowDirection="down">{t("more")}</OutlinedButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>{rest}</Grid>
        <Grid
          item
          container
          direction="column-reverse"
          sx={{
            width: "50%",
          }}
        >
          <Grid item>
            <Box sx={{ width: "1000px", mb: -14, [ps]: { width: "100%" } }}>
              <Image src={saveHeader} loader={loader} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </PageSection>
  );
};

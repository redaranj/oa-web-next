import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import aboutHeader from "public/images/about-header.png";

export const HeaderSection: FC = () => {
  const t = useTranslate();
  const { white, turquoise } = colors;
  const { h1 } = typography;

  return (
    <PageSection backgroundColor={turquoise} backgroundImage={aboutHeader}>
      <Grid
        container
        justifyContent="space-around"
        sx={{
          flexDirection: "column",
          minHeight: "35vh",
        }}
      >
        <Grid item>
          <Box
            component="h1"
            sx={{ ...h1, textAlign: "center", color: white }}
            dangerouslySetInnerHTML={{
              __html: t("aboutUsTitle"),
            }}
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};

import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { TeamItem } from "components/team/TeamItem";
import natalieCadranel from "images/darius.png";

export const DirectorSection: FC = () => {
  const t = useTranslate();
  const { white, lightGrey } = colors;
  const { h2 } = typography;

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid item>
          <Box
            component="h2"
            sx={{ ...h2, textAlign: "center" }}
            dangerouslySetInnerHTML={{
              __html: t("founderAndDirector"),
            }}
          />
        </Grid>
        <Grid item>
          <TeamItem
            name="Natalie Cadranel"
            jobTitle="Founder and Director"
            bio="Natalie is an archivist and ethnographer working at the nexus of human rights, design, and technology. She aims to protect and amplify community media by helping organizations better manage, protect, and preserve documentation they create and receive. She consults with human rights-focused organizations worldwide and was a 2019 fellow at Stanford's Digital Civil Society Lab. For the last decade, she shaped initiatives dedicated to improving access to information for social and environmental justice organizations. She holds a Masters from the UC Berkeley School of Information and a Bachelors in International Relations from UC Davis."
            image={natalieCadranel}
            backgroundColor={lightGrey}
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};

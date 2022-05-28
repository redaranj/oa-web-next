import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { TeamItem } from "components/team/TeamItem";
import johnHess from "images/darius.png";

export const TeamSection: FC = () => {
  const t = useTranslate();
  const { white } = colors;
  const { h2 } = typography;

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid item>
          <Box
            component="h2"
            sx={{ ...h2, textAlign: "center" }}
            dangerouslySetInnerHTML={{
              __html: t("teamMembers"),
            }}
          />
        </Grid>
        <Grid item>
          <TeamItem
            name="John Hess"
            jobTitle="Tech Lead"
            bio="John is an engineer and data scientist with experience across domains as varied as aerospace, healthcare, and education. He’s worked on cyber security, privacy..."
            image={johnHess}
            backgroundColor={white}
          />
        </Grid>
        <Grid item>
          <TeamItem
            name="John Hess"
            jobTitle="Tech Lead"
            bio="John is an engineer and data scientist with experience across domains as varied as aerospace, healthcare, and education. He’s worked on cyber security, privacy..."
            image={johnHess}
            backgroundColor={white}
          />
        </Grid>
        <Grid item>
          <TeamItem
            name="John Hess"
            jobTitle="Tech Lead"
            bio="John is an engineer and data scientist with experience across domains as varied as aerospace, healthcare, and education. He’s worked on cyber security, privacy..."
            image={johnHess}
            backgroundColor={white}
          />
        </Grid>
        <Grid item>
          <TeamItem
            name="John Hess"
            jobTitle="Tech Lead"
            bio="John is an engineer and data scientist with experience across domains as varied as aerospace, healthcare, and education. He’s worked on cyber security, privacy..."
            image={johnHess}
            backgroundColor={white}
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};

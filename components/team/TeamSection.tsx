import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { TeamItem } from "components/team/TeamItem";
import johnHess from "images/darius.png";

export const TeamSection: FC = () => {
  const t = useTranslate();
  const { white, lightGrey } = colors;
  const { h2 } = typography;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid container direction="column" rowSpacing={8}>
        <Grid item>
          <Box
            component="h2"
            sx={{ ...h2, textAlign: "center", pt: 4 }}
            dangerouslySetInnerHTML={{
              __html: t("teamMembers"),
            }}
          />
        </Grid>
        <TeamItem
          name="Natalie Cadranel"
          jobTitle="Founder and Director"
          bio="Natalie is an archivist and ethnographer working at the nexus of human rights, design, and technology. She aims to protect and amplify community media by helping organizations better manage, protect, and preserve documentation they create and receive. She consults with human rights-focused organizations worldwide and was a 2019 fellow at Stanford's Digital Civil Society Lab. For the last decade, she shaped initiatives dedicated to improving access to information for social and environmental justice organizations. She holds a Masters from the UC Berkeley School of Information and a Bachelors in International Relations from UC Davis."
          image={johnHess}
          backgroundColor={white}
        />
        <TeamItem
          name="John Hess"
          jobTitle="Tech Lead"
          bio="John is an engineer and data scientist with experience across domains as varied as aerospace, healthcare, and education. He’s worked on cyber security, privacy..."
          image={johnHess}
          backgroundColor={white}
        />
        <TeamItem
          name="John Hess"
          jobTitle="Tech Lead"
          bio="John is an engineer and data scientist with experience across domains as varied as aerospace, healthcare, and education. He’s worked on cyber security, privacy..."
          image={johnHess}
          backgroundColor={white}
        />
        <TeamItem
          name="John Hess"
          jobTitle="Tech Lead"
          bio="John is an engineer and data scientist with experience across domains as varied as aerospace, healthcare, and education. He’s worked on cyber security, privacy..."
          image={johnHess}
          backgroundColor={white}
        />
        <TeamItem
          name="John Hess"
          jobTitle="Tech Lead"
          bio="John is an engineer and data scientist with experience across domains as varied as aerospace, healthcare, and education. He’s worked on cyber security, privacy..."
          image={johnHess}
          backgroundColor={white}
        />
      </Grid>
    </PageSection>
  );
};

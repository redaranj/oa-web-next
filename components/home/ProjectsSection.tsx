import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { HorizontalScrollArea } from "components/common/HorizontalScrollArea";
import { ProjectItem } from "components/home/ProjectItem";
import projectSave from "images/project-save.png";
import projectGuide from "images/project-guide.png";
import projectResearch from "images/project-research.png";

export const ProjectsSection: FC = () => {
  const t = useTranslate();
  const { h2 } = typography;
  const { lightGrey } = colors;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        direction="column"
        sx={{ paddingTop: 16, paddingBottom: 12 }}
      >
        <Grid item>
          <Box
            component="h2"
            sx={{ ...h2, mb: 7 }}
            dangerouslySetInnerHTML={{ __html: t("ourProjectsTitle") }}
          />
        </Grid>
        <HorizontalScrollArea>
          <ProjectItem title={t("save")} image={projectSave} url="" />
          <ProjectItem
            title={t("guide")}
            description={t("guideDescription")}
            image={projectGuide}
            url=""
          />
          <ProjectItem title={t("research")} image={projectResearch} url="" />
        </HorizontalScrollArea>
      </Grid>
    </PageSection>
  );
};

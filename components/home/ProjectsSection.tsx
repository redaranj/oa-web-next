import { FC } from "react";
import { Box } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { HorizontalCarousel } from "components/common/HorizontalCarousel";
import { ProjectItem } from "components/home/ProjectItem";
import projectSave from "public/images/project-save.png";
import projectGuide from "public/images/project-guide.png";
import projectResearch from "public/images/project-research.png";

export const ProjectsSection: FC = () => {
  const t = useTranslate();
  const { h2 } = typography;
  const { lightGrey } = colors;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Box
        component="h2"
        sx={{ ...h2, mb: 7 }}
        dangerouslySetInnerHTML={{ __html: t("ourProjectsTitle") }}
      />
      <Box>
        <HorizontalCarousel columnOnMobile visibleCount={3}>
          <ProjectItem
            title={t("save")}
            description={t("saveDescription")}
            image={projectSave}
            url=""
          />
          <ProjectItem
            title={t("guides")}
            description={t("guidesDescription")}
            image={projectGuide}
            url=""
          />
          <ProjectItem
            title={t("research")}
            description={t("researchDescription")}
            image={projectResearch}
            url=""
          />
        </HorizontalCarousel>
      </Box>
    </PageSection>
  );
};

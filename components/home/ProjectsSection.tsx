import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { ProjectItem } from "components/home/ProjectItem";

export const ProjectsSection: FC = () => {
  const t = useTranslate();
  const { h1 } = typography;
  const { lightGrey } = colors;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid container direction="column">
        <Grid item>
          <Box
            component="h1"
            sx={h1}
            dangerouslySetInnerHTML={{ __html: t("ourProjectsTitle") }}
          />
        </Grid>
        <Grid item container direction="row">
          <ProjectItem title={t("save")} image={null} url={""} />
          <ProjectItem title={t("guide")} image={null} url={""} />
          <ProjectItem title={t("research")} image={null} url={""} />
        </Grid>
      </Grid>
    </PageSection>
  );
};

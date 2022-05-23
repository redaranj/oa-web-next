import { FC } from "react";
import { Box } from "@mui/material";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ProjectsSection: FC = () => {
  const { lightGrey } = colors;

  return <PageSection backgroundColor={lightGrey}>Projects</PageSection>;
};

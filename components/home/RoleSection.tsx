import { FC } from "react";
import { Box } from "@mui/material";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const RoleSection: FC = () => {
  const { white } = colors;

  return <PageSection backgroundColor={white}>Roles</PageSection>;
};

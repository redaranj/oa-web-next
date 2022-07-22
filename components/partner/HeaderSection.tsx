import { FC } from "react";
import { Box } from "@mui/material";
import { colors } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";

export const HeaderSection: FC = ({ children }) => {
  const { white } = colors;

  return (
    <BaseHeaderSection backgroundColor={white}>
      <Box sx={{ textAlign: "center" }}>{children}</Box>
    </BaseHeaderSection>
  );
};

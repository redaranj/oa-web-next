import { FC } from "react";
import { Box } from "@mui/material";
import { colors } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";

export const HeaderSection: FC = ({ children }) => {
  const { white, turquoise } = colors;

  return (
    <BaseHeaderSection backgroundColor={turquoise}>
      <Box sx={{ "> h1": { color: white, textAlign: "center" } }}>
        {children}
      </Box>
    </BaseHeaderSection>
  );
};

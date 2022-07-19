import { FC } from "react";
import { Box } from "@mui/material";
import { colors } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";
import aboutHeader from "public/images/news-header.png";

export const HeaderSection: FC = ({ children }) => {
  const { white } = colors;

  return (
    <BaseHeaderSection backgroundColor={white} backgroundImage={aboutHeader}>
      <Box sx={{ "> h1": { color: white, textAlign: "center" } }}>
        {children}
      </Box>
    </BaseHeaderSection>
  );
};

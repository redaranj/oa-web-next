import { FC } from "react";
import { Box } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import aboutHeader from "public/images/about-header.png";

export const HeaderSection: FC = ({ children }) => {
  const { white } = colors;

  return (
    <PageSection backgroundColor={white} backgroundImage={aboutHeader}>
      <Box sx={{ "> h1": { color: white, textAlign: "center" } }}>
        {children}
      </Box>
    </PageSection>
  );
};

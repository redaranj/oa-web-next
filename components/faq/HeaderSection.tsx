import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { colors } from "styles/theme";
import { HeaderSection as BaseHeaderSection } from "components/common/HeaderSection";
import FAQHeader from "public/images/faq-header.png";

export const HeaderSection: FC<PropsWithChildren> = ({ children }) => {
  const { white } = colors;

  return (
    <BaseHeaderSection backgroundImage={FAQHeader}>
      <Box sx={{ "> h1": { color: white, textAlign: "center" } }}>
        {children}
      </Box>
    </BaseHeaderSection>
  );
};

import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { colors, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ContentSection: FC<PropsWithChildren> = ({ children }) => {
  const { white } = colors;
  const { body } = typography;

  return (
    <PageSection backgroundColor={white}>
      <Box sx={{ maxWidth: "710px", margin: "0 auto", "> ul": body }}>
        {children}
      </Box>
    </PageSection>
  );
};

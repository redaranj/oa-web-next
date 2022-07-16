import { FC } from "react";
import { Stack } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const OpportunitySection: FC = ({ children }) => {
  const { white } = colors;

  return (
    <PageSection backgroundColor={white}>
      <Stack>{children}</Stack>
    </PageSection>
  );
};

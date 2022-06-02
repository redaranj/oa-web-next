import { FC } from "react";
import { Box } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import doingBetter from "images/doing-better.svg";

export const BetterSection: FC = () => {
  const { white } = colors;

  return (
    <PageSection backgroundColor={white} backgroundImage={doingBetter}>
      <Box sx={{ minHeight: 200, mb: 12 }} />
    </PageSection>
  );
};

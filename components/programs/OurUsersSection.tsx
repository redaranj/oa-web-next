import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const OurUsersSection: FC<PropsWithChildren> = ({ children }) => {
  const { white } = colors;
  const { bodyLarge } = typography;

  return (
    <PageSection backgroundColor={white}>
      <Box sx={{ "> p": bodyLarge, "> ul": bodyLarge }}>{children}</Box>
    </PageSection>
  );
};

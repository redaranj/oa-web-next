import { FC } from "react";
import { Stack } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ProfileSection: FC = ({ children }) => {
  const { lightGrey } = colors;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Stack>{children}</Stack>
    </PageSection>
  );
};

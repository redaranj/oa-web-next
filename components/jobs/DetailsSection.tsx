import { FC } from "react";
import { Stack } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { ContactBox } from "components/jobs/ContactBox";

export const DetailsSection: FC = ({ children }) => {
  const { lightGrey } = colors;

  return (
    <PageSection backgroundColor={lightGrey} sx={{ p: 6 }}>
      <Stack spacing={6}>{children}</Stack>
      <ContactBox />
    </PageSection>
  );
};

import { FC, PropsWithChildren } from "react";
import { Stack } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const DetailsSection: FC<PropsWithChildren> = ({ children }) => {
  const { lightGrey } = colors;
  const first = (children as any[]).slice(0, -1);
  const last = (children as any[]).slice(-1);

  return (
    <PageSection backgroundColor={lightGrey} sx={{ p: 6 }}>
      <Stack spacing={6}>{first}</Stack>
      {last}
    </PageSection>
  );
};

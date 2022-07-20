import { FC } from "react";
import Link from "next/link";
import { Stack } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ProfileSection: FC = ({ children }) => {
  const { white, lightGrey } = colors;

  return (
    <>
      <PageSection backgroundColor={white}>
        <Link href="/use">All use cases</Link>
      </PageSection>
      <PageSection backgroundColor={lightGrey}>
        <Stack>{children}</Stack>
      </PageSection>
    </>
  );
};

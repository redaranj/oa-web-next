import { FC } from "react";
import { Stack } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { UseCaseItem } from "components/use/UseCaseItem";

interface UseCasesSectionProps {
  pages: any[];
}

export const UseCasesSection: FC<UseCasesSectionProps> = ({ pages }) => {
  const { white } = colors;

  return (
    <PageSection backgroundColor={white}>
      <Stack spacing={3}>
        {pages.map((page) => (
          <UseCaseItem key={page.path} {...page} />
        ))}
      </Stack>
    </PageSection>
  );
};

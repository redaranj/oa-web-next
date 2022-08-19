import { FC } from "react";
import { Box, Stack } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { UseCaseItem } from "components/use/UseCaseItem";

type UseCasesSectionProps = {
  pages: any[];
};

export const UseCasesSection: FC<UseCasesSectionProps> = ({
  pages,
  children,
}) => {
  const { white } = colors;
  const { ps, pl, ts, tl, ds, dl } = breakpoints;

  return (
    <PageSection
      backgroundColor={white}
      sx={{
        py: 4,
        px: 11.25,
        [ps]: {
          py: 2,
          px: 3,
        },
        [pl]: {
          py: 2,
          px: 3,
        },
        [ts]: {
          py: 3,
          px: 4.375,
        },
        [tl]: {
          py: 3,
          px: 4.375,
        },
        [ds]: {
          py: 4,
          px: 6.25,
        },
        [dl]: {
          py: 4,
          px: 11.25,
        },
      }}
    >
      <Box>{children}</Box>
      <Stack spacing={6}>
        {pages.map((page) => (
          <UseCaseItem key={page.path} {...page} />
        ))}
      </Stack>
    </PageSection>
  );
};

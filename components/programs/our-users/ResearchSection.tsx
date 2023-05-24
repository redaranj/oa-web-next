import { FC, PropsWithChildren } from "react";
import { Box, Stack } from "@mui/material";
import { colors, breakpoints, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { ResearchItem } from "components/programs/our-users/ResearchItem";

type ResearchSectionProps = PropsWithChildren<{
  pages: any[];
}>;

export const ResearchSection: FC<ResearchSectionProps> = ({
  pages,
  children,
}) => {
  const filteredPages = pages.filter((page) => !!page.name);
  const { white } = colors;
  const { bodyLarge } = typography;
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
      <Box sx={{ pt: 4, pb: 4, "> p": bodyLarge }}>{children}</Box>
      <Stack spacing={6} sx={{ a: { textDecoration: "none" } }}>
        {filteredPages.map((page) => (
          <ResearchItem key={page.path} {...page} />
        ))}
      </Stack>
    </PageSection>
  );
};

import { FC, PropsWithChildren } from "react";
import { Box, Stack } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { ResearchItem } from "components/programs/ResearchItem";

type ResearchSectionProps = PropsWithChildren<{
  pages: any[];
}>;

export const ResearchSection: FC<ResearchSectionProps> = ({
  pages,
  children,
}) => {
  const filteredPages = pages.filter((page) => !!page.name);
  const { lightGrey } = colors;
  const { ps, pl, ts, tl, ds, dl } = breakpoints;
  const [first, ...rest] = children as any[];

  return (
    <PageSection
      backgroundColor={lightGrey}
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
      <Box sx={{ pt: 4 }}>{first}</Box>
      <Box>{rest}</Box>
      <Stack spacing={6} sx={{ a: { textDecoration: "none" } }}>
        {filteredPages.map((page) => (
          <ResearchItem key={page.path} {...page} />
        ))}
      </Stack>
    </PageSection>
  );
};

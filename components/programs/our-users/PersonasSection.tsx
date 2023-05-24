import { FC, PropsWithChildren } from "react";
import { Box, Stack } from "@mui/material";
import { colors, breakpoints, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { PersonaItem } from "components/common/PersonaItem";

type PersonasSectionProps = PropsWithChildren<{
  personas: any[];
  region: string;
}>;

export const PersonasSection: FC<PersonasSectionProps> = ({
  personas,
  region,
  children,
}) => {
  const filteredPages = personas.filter((persona) => persona.region === region);
  // sort by persona.country, then persona.name
  const sortedPages = filteredPages.sort((a, b) => {
    const aCountry = a.country.toLowerCase();
    const bCountry = b.country.toLowerCase();
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();
    if (aCountry < bCountry) {
      return -1;
    }
    if (aCountry > bCountry) {
      return 1;
    }
    if (aName < bName) {
      return -1;
    }
    if (aName > bName) {
      return 1;
    }
    return 0;
  });

  const { white } = colors;
  const { bodyLarge } = typography;
  const { ps, pl, ts, tl, ds, dl } = breakpoints;
  const [first, ...rest] = children as any[];

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
      <Box sx={{ pt: 4 }}>{first}</Box>
      <Box sx={{ "> p": bodyLarge }}>{rest}</Box>
      <Stack spacing={6} sx={{ a: { textDecoration: "none" } }}>
        {sortedPages.map((page) => (
          <PersonaItem key={page.path} {...page} />
        ))}
      </Stack>
    </PageSection>
  );
};

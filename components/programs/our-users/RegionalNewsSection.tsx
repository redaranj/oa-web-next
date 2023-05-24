import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { colors, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { NewsItem } from "components/common/NewsItem";

type RegionalNewsSectionProps = PropsWithChildren<{
  items: any[];
  region: string;
}>;

export const RegionalNewsSection: FC<RegionalNewsSectionProps> = ({
  items,
  region,
  children,
}) => {
  const { lightGrey } = colors;
  const { bodyLarge } = typography;
  const filteredPages = items.filter((item) => item.region === region);
  const sortedPages = filteredPages.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return bDate.getTime() - aDate.getTime();
  });
  return (
    <PageSection backgroundColor={lightGrey}>
      <Box sx={{ "> p": bodyLarge }}>{children}</Box>
      <Box
        display="grid"
        gridAutoRows="1fr"
        gap={6}
        sx={{ a: { textDecoration: "none" } }}
      >
        {sortedPages.map((page: any) => (
          <NewsItem key={page.path} {...page} />
        ))}
      </Box>
    </PageSection>
  );
};

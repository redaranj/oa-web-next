import { FC } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { NewsItem } from "components/news/NewsItem";

interface NewsSectionProps {
  pages: any[];
}

export const NewsSection: FC<NewsSectionProps> = ({ pages }) => {
  const { lightGrey } = colors;
  /* eslint-disable no-param-reassign */
  const allCategories = pages.reduce((prev, current) => {
    prev[current.category] = prev[current.category] ?? 0 + 1;
    return prev;
  }, {});
  /* eslint-enable no-param-reassign */
  const categories = Object.keys(allCategories).sort();

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid item>{categories.join(",")}</Grid>
      <Grid
        container
        justifyContent="space-around"
        sx={{
          flexDirection: "column",
        }}
      >
        {pages.map((page: any) => (
          <NewsItem key={page.path} {...page} />
        ))}
      </Grid>
    </PageSection>
  );
};

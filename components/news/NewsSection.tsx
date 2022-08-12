import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { FilledButton } from "components/common/FilledButton";
import { NewsItem } from "components/news/NewsItem";

type NewsSectionProps = {
  pages: any[];
};

export const NewsSection: FC<NewsSectionProps> = ({ pages }) => {
  const { lightGrey, white, black } = colors;
  /* eslint-disable no-param-reassign */
  const allCategories = pages.reduce((prev, current) => {
    prev[current.category] = prev[current.category] ?? 0 + 1;
    return prev;
  }, {});
  /* eslint-enable no-param-reassign */
  const categories = Object.keys(allCategories).sort();

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid item>
        <Box sx={{ pb: 6 }}>
          <Grid container direction="row" justifyContent="center">
            {categories.map((category) => (
              <Grid item key={category}>
                <FilledButton backgroundColor={white} textColor={black}>
                  {category}
                </FilledButton>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid
        container
        justifyContent="space-around"
        spacing={6}
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

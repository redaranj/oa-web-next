import { FC } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { GuideItem } from "components/guides/GuideItem";

type GuidesSectionProps = {
  pages: any[];
};

export const GuidesSection: FC<GuidesSectionProps> = ({ pages }) => {
  const { white, mediumGrey } = colors;

  return (
    <PageSection
      backgroundColor={white}
      sx={{ borderBottom: `1px solid ${mediumGrey}` }}
    >
      <Grid
        container
        rowSpacing={8}
        sx={{
          flexDirection: "column",
        }}
      >
        {pages.map((page) => (
          <GuideItem key={page.path} {...page} />
        ))}
      </Grid>
    </PageSection>
  );
};

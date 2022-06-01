import { FC } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { GuideItem } from "components/guides/GuideItem";
import guideSample from "images/guide-sample.png";

export const GuidesSection: FC = () => {
  const { white, mediumGrey } = colors;

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        rowSpacing={8}
        sx={{
          flexDirection: "column",
          borderBottom: `1px solid ${mediumGrey}`,
          pb: 20,
        }}
      >
        <GuideItem
          title="OpenArchive's Guide to Preserving Truth to Power"
          description="OpenArchive's Guide to Preserving Truth to Power"
          image={guideSample}
        />
        <GuideItem
          title="OpenArchive's Guide to Preserving Truth to Power"
          description="OpenArchive's Guide to Preserving Truth to Power"
          image={guideSample}
        />
        <GuideItem
          title="OpenArchive's Guide to Preserving Truth to Power"
          description="OpenArchive's Guide to Preserving Truth to Power"
          image={guideSample}
        />
      </Grid>
    </PageSection>
  );
};

import { FC } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { GuideItem } from "components/guides/GuideItem";
import guideSample from "images/guide-sample.png";

export const GuidesSection: FC = () => {
  const { lightGrey } = colors;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        spacing={8}
        sx={{
          flexDirection: "column",
        }}
      >
        <GuideItem
          title="OpenAchive's Guide to Preserving Truth to Power"
          description="OpenAchive's Guide to Preserving Truth to Power"
          image={guideSample}
        />
        <GuideItem
          title="OpenAchive's Guide to Preserving Truth to Power"
          description="OpenAchive's Guide to Preserving Truth to Power"
          image={guideSample}
        />
        <GuideItem
          title="OpenAchive's Guide to Preserving Truth to Power"
          description="OpenAchive's Guide to Preserving Truth to Power"
          image={guideSample}
        />
      </Grid>
    </PageSection>
  );
};

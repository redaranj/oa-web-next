import { FC } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { AcronymItem } from "components/save/AcronymItem";
import sharePhone from "images/share-phone.png";

export const AcronymSection: FC = () => {
  const { white } = colors;

  return (
    <PageSection backgroundColor={white}>
      <Grid
        container
        spacing={8}
        sx={{
          flexDirection: "row",
        }}
      >
        <AcronymItem
          titleKey="shareTitle"
          descriptionOneKey="shareDescriptionOne"
          descriptionTwoKey="shareDescriptionTwo"
          image={sharePhone}
        />
      </Grid>
    </PageSection>
  );
};

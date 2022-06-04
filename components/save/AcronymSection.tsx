import { FC } from "react";
import { Grid } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { AcronymItem } from "components/save/AcronymItem";
import sharePhone from "images/share-phone.png";

export const AcronymSection: FC = () => {
  const { white } = colors;
  const { phoneSmall, tabletSmall } = breakpoints;

  return (
    <PageSection backgroundColor={white} sx={{ pb: 0 }}>
      <Grid
        container
        sx={{
          flexDirection: "row",
          [phoneSmall]: {
            flexDirection: "column",
          },
          [tabletSmall]: {
            flexDirection: "row",
          },
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

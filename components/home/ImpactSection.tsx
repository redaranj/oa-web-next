import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { ImpactItem } from "components/home/ImpactItem";

export const ImpactSection: FC = () => {
  const { white } = colors;

  return (
    <PageSection backgroundColor={white}>
      <Grid direction="column">
        <Grid item>Our impact</Grid>
        <Grid item container direction="row">
          <ImpactItem
            title={"Information security"}
            description={
              "The tools OpenArchive builds help citizen reporters and eyewitnesses"
            }
            image={null}
          />
          <ImpactItem
            title={"Free speech"}
            description={
              "The tools OpenArchive builds help citizen reporters and eyewitnesses"
            }
            image={null}
          />
          <ImpactItem
            title={"Free universal access"}
            description={
              "The tools OpenArchive builds help citizen reporters and eyewitnesses across the world preserve"
            }
            image={null}
          />
          <ImpactItem
            title={"Data processing speed"}
            description={"The tools OpenArchive builds help citizen reporters and eyewitnesses"}
            image={null}
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};

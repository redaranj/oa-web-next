import { FC, PropsWithChildren } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const TeamSection: FC<PropsWithChildren> = ({ children }) => {
  const { lightGrey } = colors;
  const [first, ...rest] = children as any[];

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid container direction="column" rowSpacing={8}>
        <Grid item>{first}</Grid>
        {rest}
      </Grid>
    </PageSection>
  );
};

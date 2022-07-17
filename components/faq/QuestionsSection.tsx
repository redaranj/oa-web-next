import { FC, PropsWithChildren } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const QuestionsSection: FC = ({ children }) => {
  const { lightGrey } = colors;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        sx={{
          flexDirection: "column",
        }}
      >
        {children}
      </Grid>
    </PageSection>
  );
};

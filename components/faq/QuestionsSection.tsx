import { FC } from "react";
import { Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const QuestionsSection: FC = ({ children }) => {
  const { lightGrey, darkGrey } = colors;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        sx={{
          flexDirection: "column",
          counterReset: "questionCounter",
          ".question": {
            counterIncrement: "questionCounter",
          },
          ".question::before": {
            content: "counter(questionCounter, decimal-leading-zero)",
            color: darkGrey,
            display: "flex",
          },
        }}
      >
        {children}
      </Grid>
    </PageSection>
  );
};

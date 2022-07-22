import { FC } from "react";
import { Grid } from "@mui/material";
import { colors, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const QuestionsSection: FC = ({ children }) => {
  const { lightGrey, mediumGrey } = colors;
  const { bodyLarge } = typography;

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
            ...bodyLarge,
            content: "counter(questionCounter, decimal-leading-zero)",
            color: mediumGrey,
            display: "flex",
            pl: "10px",
            pt: "9px",
          },
        }}
      >
        {children}
      </Grid>
    </PageSection>
  );
};

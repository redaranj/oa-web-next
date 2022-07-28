import { FC, useState, useCallback } from "react";
import { Box, Grid } from "@mui/material";
import { colors, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { ToggleButton } from "components/common/ToggleButton";

export const QuestionsSection: FC = ({ children }) => {
  const { lightGrey, mediumGrey } = colors;
  const { bodyLarge } = typography;
  const categories = ["About OpenArchive", "Save", "Support / Donations"];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const toggleCategory = useCallback(
    (category) =>
      selectedCategory === category
        ? setSelectedCategory(null)
        : setSelectedCategory(category),
    [selectedCategory, setSelectedCategory]
  );

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
        <Grid
          container
          direction="row"
          wrap="nowrap"
          justifyContent="center"
          spacing={3}
          sx={{ mb: 6 }}
        >
          {categories.map((category) => (
            <Grid item>
              <ToggleButton
                on={category === selectedCategory}
                onClick={() => toggleCategory(category)}
              >
                {category}
              </ToggleButton>
            </Grid>
          ))}
        </Grid>
        <Box>{children}</Box>
      </Grid>
    </PageSection>
  );
};

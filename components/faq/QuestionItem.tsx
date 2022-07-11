import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const QuestionItem: FC = () => {
  const t = useTranslate();
  const { lightGrey } = colors;
  const { h2 } = typography;
  const { ps, tl } = breakpoints;

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid
        container
        sx={{
          flexDirection: "column",
        }}
      ></Grid>
    </PageSection>
  );
};

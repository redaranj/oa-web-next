import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { OutlinedButton } from "components/common/OutlinedButton";
import { FilledButton } from "components/common/FilledButton";
import { ParticipateItem } from "components/team/ParticipateItem";

export const ParticipateSection: FC = ({ children }) => {
  const t = useTranslate();
  const { white, black, lightBurgundy, lightTurquoise, mediumBurgundy } =
    colors;
  const { h2, bodyLarge } = typography;
  const { ps, tl } = breakpoints;
  const [title, description, ...items] = children as any[];

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column">
        <Grid item>{title}</Grid>
        <Grid item>{description}</Grid>
        <Grid
          item
          container
          spacing={6}
          alignItems="flex-end"
          sx={{
            pb: 12,
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: {
              flexDirection: "row",
            },
          }}
        >
          {items}
        </Grid>
      </Grid>
    </PageSection>
  );
};

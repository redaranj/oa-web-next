import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { TeamItem } from "components/team/TeamItem";
import johnHess from "images/darius.png";

export const BoardSection: FC = ({ children }) => {
  const t = useTranslate();
  const { white, lightGrey } = colors;
  const { h2 } = typography;
  const [first, ...rest] = children;

  return (
    <PageSection backgroundColor={white}>
      <Grid container direction="column" rowSpacing={8}>
        <Grid item>{first}</Grid>
        {rest}
      </Grid>
    </PageSection>
  );
};

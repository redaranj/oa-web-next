import { FC } from "react";
import { Grid, AccordionSummary } from "@mui/material";
import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { colors } from "styles/theme";

type QuestionProps = {
  expanded: boolean;
  children: any;
};

export const Question: FC<QuestionProps> = ({ expanded, children }) => {
  const { darkGrey, turquoise } = colors;

  return (
    <AccordionSummary>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        spacing={3}
      >
        <Grid item className="question" />
        <Grid item flexGrow={1}>
          {children}
        </Grid>
        <Grid item>
          {expanded ? (
            <ExpandLessIcon
              htmlColor={turquoise}
              fontSize="large"
              sx={{ mt: "2px" }}
            />
          ) : (
            <ExpandMoreIcon
              htmlColor={darkGrey}
              fontSize="large"
              sx={{ mt: "4px" }}
            />
          )}
        </Grid>
      </Grid>
    </AccordionSummary>
  );
};

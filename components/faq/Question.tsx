import { FC } from "react";
import { Grid, AccordionSummary, Box } from "@mui/material";
import {
  ChevronRight as ChevronRightIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { colors } from "styles/theme";

interface QuestionProps {
  expanded: boolean;
  children: any;
}

export const Question: FC<QuestionProps> = ({ expanded, children }) => {
  const { lightGrey } = colors;

  return (
    <AccordionSummary>
      <Grid container direction="row" justifyContent="space-between">
        <Grid item>
          <Box className="question">{children}</Box>
        </Grid>
        <Grid item>
          {expanded ? (
            <ExpandMoreIcon
              htmlColor={lightGrey}
              fontSize="medium"
              sx={{ mt: "2px" }}
            />
          ) : (
            <ChevronRightIcon
              htmlColor={lightGrey}
              fontSize="medium"
              sx={{ mt: "4px" }}
            />
          )}
        </Grid>
      </Grid>
    </AccordionSummary>
  );
};

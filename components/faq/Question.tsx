import { FC } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Grid, AccordionSummary } from "@mui/material";
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
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        sx={{ maxWidth: 500 }}
      >
        <MDXProvider>{children}</MDXProvider>
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
    </AccordionSummary>
  );
};

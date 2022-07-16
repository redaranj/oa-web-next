import { FC, useState } from "react";
import { Accordion } from "@mui/material";
import { Question } from "components/faq/Question";
import { Answer } from "components/faq/Answer";

export const QuestionItem: FC = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const [first, ...rest] = children as any[];

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      elevation={0}
      sx={{ "::before": { display: "none" } }}
    >
      <Question expanded={expanded}>{first}</Question>
      <Answer>{rest}</Answer>
    </Accordion>
  );
};

import { FC } from "react";
import { Box, AccordionDetails } from "@mui/material";

export const Answer: FC = ({ children }) => (
  <AccordionDetails sx={{ border: 0 }}>
    <Box sx={{ p: 2 }}>{children}</Box>
  </AccordionDetails>
);

import { FC, PropsWithChildren } from "react";
import { Box, AccordionDetails } from "@mui/material";
import { typography } from "styles/theme";

export const Answer: FC<PropsWithChildren> = ({ children }) => {
  const { bodyLarge } = typography;

  return (
    <AccordionDetails sx={{ border: 0 }}>
      <Box sx={{ p: 2, "> p": bodyLarge }}>{children}</Box>
    </AccordionDetails>
  );
};

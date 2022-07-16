import { FC } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Box, AccordionDetails } from "@mui/material";
import { typography, colors } from "styles/theme";

export const Answer: FC = ({ children }) => {
  const { lightGrey } = colors;
  const { p } = typography;

  return (
    <AccordionDetails sx={{ border: 0 }}>
      <Box
        sx={{
          p: 2,
          border: `1px solid ${lightGrey}`,
          borderRadius: 3,
        }}
      >
        <MDXProvider>{children}</MDXProvider>
      </Box>
    </AccordionDetails>
  );
};
